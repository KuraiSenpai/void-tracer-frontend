import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';
import { SteelPathOfferings, VoidTrader, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { voidTraderName } from '../../shared/constants/vendors.constants';
import { CountdownPipe } from '../../shared/pipes/countdown.pipe';
import { Skeleton } from '../../shared/skeleton/skeleton';
import { isFuture } from '../../shared/utils/date-utils';
import { CollapsibleDirective } from "../../shared/directives/collapsible.directive";

@Component({
  selector: 'app-vendors',
  imports: [CommonModule, MatIconModule, MatCardModule, CountdownPipe, Skeleton, CollapsibleDirective],
  templateUrl: './vendor-list.html',
  styleUrl: './vendor-list.scss',
})
export class VendorList implements OnInit {
  readonly voidTraderTitle = voidTraderName;
  readonly isFuture = isFuture;

  vendors$!: Observable<{
    steelPath: SteelPathOfferings;
    varzia: VoidTrader;
    baro: VoidTrader;
  }>;

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
  }
}
