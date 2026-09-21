import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';
import { SteelPathOfferings, VoidTrader, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { BIRD3_ROTATION_CONFIG, ShardColor, voidTraderName } from '../../shared/constants/vendors.constants';
import { CollapsibleDirective } from '../../shared/directives/collapsible.directive';
import { CountdownPipe } from '../../shared/pipes/countdown.pipe';
import { Skeleton } from '../../shared/skeleton/skeleton';
import { isFuture, normalizeExpiry } from '../../shared/utils/date-utils';

@Component({
  selector: 'app-vendors',
  imports: [CommonModule, MatIconModule, MatCardModule, CountdownPipe, Skeleton, CollapsibleDirective],
  templateUrl: './vendor-list.html',
  styleUrl: './vendor-list.scss',
})
export class VendorList implements OnInit {
  readonly voidTraderTitle = voidTraderName;
  readonly isFuture = isFuture;
  readonly normalizeExpiry = normalizeExpiry;

  vendors$!: Observable<{
    steelPath: SteelPathOfferings;
    varzia: VoidTrader;
    baro: VoidTrader;
  }>;

  nextWeeklyResetDate!: Date;
  currentShardText: ShardColor | '' = '';

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.vendors$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => ({
        steelPath: data.steelPath,
        varzia: data.vaultTrader,
        baro: data.voidTraders.find((vt) => vt.character === voidTraderName)!,
      })),
      shareReplay(1),
    );
    this.getCurrentBird3Shard();
  }

  getCurrentBird3Shard(): void {
    const { START_ANCHOR, WEEK_IN_MS, SHARD_SEQUENCE } = BIRD3_ROTATION_CONFIG;
    const now = Date.now();

    // Calc difference from Anchor date to now in weeksPassed
    const elapsedMs = now - START_ANCHOR.timestamp;
    const weeksPassed = Math.floor(elapsedMs / WEEK_IN_MS);

    // Calc the last weekly reset
    const lastResetTimestamp = START_ANCHOR.timestamp + weeksPassed * WEEK_IN_MS;

    // Find the next weekly reset (next week)
    const nextResetTimestamp = lastResetTimestamp + WEEK_IN_MS;
    this.nextWeeklyResetDate = new Date(nextResetTimestamp);

    const sequenceIndex = ((weeksPassed % SHARD_SEQUENCE.length) + SHARD_SEQUENCE.length) % SHARD_SEQUENCE.length;
    this.currentShardText = SHARD_SEQUENCE[sequenceIndex];
  }
}
