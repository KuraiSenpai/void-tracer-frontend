import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Invasion } from 'warframe-worldstate-parser';

@Component({
  selector: 'app-invasion-section',
  imports: [MatCardModule, DecimalPipe],
  templateUrl: './invasion-section.html',
  styleUrl: './invasion-section.scss',
})
export class InvasionSection {
  @Input({ required: true }) invasion?: Invasion;
  @Input() isLast: boolean = false;

  isInfested(): boolean {
    return true;
  }

  getFactionColor(faction: string): string {
    return faction.toLowerCase();
  }
}
