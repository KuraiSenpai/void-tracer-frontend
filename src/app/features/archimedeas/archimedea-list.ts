import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { Archimedea, WorldState } from 'warframe-worldstate-parser';
import { WorldStateService } from '../../core/services/world-state.service';
import { Skeleton } from '../../shared/skeleton/skeleton';
import { ArchimedeaSection } from './archimedea-section/archimedea-section';

@Component({
  selector: 'app-archimedea-list',
  imports: [CommonModule, ArchimedeaSection, Skeleton],
  templateUrl: './archimedea-list.html',
  styleUrl: './archimedea-list.scss',
})
export class ArchimedeaList implements OnInit {
  archimedeas$!: Observable<Archimedea[]>;

  constructor(private worldStateService: WorldStateService) {}

  ngOnInit(): void {
    this.archimedeas$ = this.worldStateService.getWorldState().pipe(
      map((data: WorldState) => data.archimedeas),
      shareReplay(1),
    );
  }
}
