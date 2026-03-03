import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Fissure } from 'warframe-worldstate-parser';
import { CountdownPipe } from '../../../shared/pipes/countdown.pipe';
import { GroupByTierPipe } from '../../../shared/pipes/groupByTier.pipe';
import { Skeleton } from '../../../shared/skeleton/skeleton';
import { CollapsibleDirective } from "../../../shared/directives/collapsible.directive";

@Component({
  selector: 'app-fissure-section',
  imports: [CommonModule, MatCardModule, MatIconModule, GroupByTierPipe, CountdownPipe, Skeleton, CollapsibleDirective],
  templateUrl: './fissure-section.html',
  styleUrl: './fissure-section.scss',
})
export class FissureSection {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) fissures: Fissure[] = [];
}
