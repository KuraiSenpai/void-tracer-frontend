import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';
import { Invasion, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { CollapsibleDirective } from '../../shared/directives/collapsible.directive';
import { Skeleton } from '../../shared/skeleton/skeleton';
import { InvasionSection } from './invasion-section/invasion-section';

@Component({
  selector: 'app-invasions',
  imports: [CommonModule, CollapsibleDirective, MatIconModule, MatCardModule, Skeleton, InvasionSection],
  templateUrl: './invasion-list.html',
  styleUrl: './invasion-list.scss',
})
export class InvasionList implements OnInit {
  invasions$!: Observable<Invasion[]>;

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.invasions$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => {
        return data.invasions.filter((invasion) => !invasion.completed && invasion.completion < 100 && invasion.completion > 0);
      }),
      shareReplay(1),
    );
  }
}
