import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';
import { Alert, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { CountdownPipe } from '../../shared/pipes/countdown.pipe';
import { Skeleton } from '../../shared/skeleton/skeleton';
import { CollapsibleDirective } from "../../shared/directives/collapsible.directive";

@Component({
  selector: 'app-alerts',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    CountdownPipe,
    Skeleton,
    CollapsibleDirective
],
  templateUrl: './alert-list.html',
  styleUrl: './alert-list.scss',
})
export class AlertList implements OnInit {
  alerts$!: Observable<Alert[]>;

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.alerts$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => data.alerts),
      shareReplay(1),
    );
  }
}
