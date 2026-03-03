import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';
import { Fissure, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { Skeleton } from '../../shared/skeleton/skeleton';
import { FissureSection } from './fissure-section/fissure-section';

@Component({
  selector: 'app-fissures',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FissureSection,
    Skeleton,
  ],
  templateUrl: './fissure-list.html',
  styleUrl: './fissure-list.scss',
})
export class FissureList implements OnInit {
  fissures$!: Observable<{
    normal: Fissure[];
    hardMode: Fissure[];
    voidStorm: Fissure[];
  }>;

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.fissures$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => ({
        normal: data.fissures.filter((f) => !f.isHard && !f.isStorm),
        hardMode: data.fissures.filter((f) => f.isHard),
        voidStorm: data.fissures.filter((f) => f.isStorm),
      })),
      shareReplay(1),
    );
  }
}
