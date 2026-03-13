import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Archimedea } from 'warframe-worldstate-parser';
import { CollapsibleDirective } from '../../../shared/directives/collapsible.directive';
import { Skeleton } from '../../../shared/skeleton/skeleton';

@Component({
  selector: 'app-archimedea-section',
  imports: [CommonModule, CollapsibleDirective, MatIconModule, MatCardModule, Skeleton],
  templateUrl: './archimedea-section.html',
  styleUrl: './archimedea-section.scss',
})
export class ArchimedeaSection {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) archimedea!: Archimedea;
}
