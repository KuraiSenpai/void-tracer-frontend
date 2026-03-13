import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map, shareReplay } from 'rxjs';
import { WorldEvent, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { CollapsibleDirective } from '../../shared/directives/collapsible.directive';
import { CountdownPipe } from '../../shared/pipes/countdown.pipe';
import { Skeleton } from '../../shared/skeleton/skeleton';

@Component({
  selector: 'app-events',
  imports: [CommonModule, MatCardModule, MatIconModule, CountdownPipe, Skeleton, CollapsibleDirective],
  templateUrl: './event-list.html',
  styleUrl: './event-list.scss',
})
export class EventList implements OnInit {
  events$!: Observable<WorldEvent[]>;

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.events$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => data.events),
      shareReplay(1),
    );
  }
}
