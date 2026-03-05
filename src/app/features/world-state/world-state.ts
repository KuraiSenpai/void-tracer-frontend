import { Component, HostListener } from '@angular/core';
import { AlertList } from '../alerts/alert-list';
import { Calendar1999 } from '../calendar/calendar';
import { FissureList } from '../fissures/fissure-list';
import { InvasionList } from '../invasions/invasion-list';
import { VendorList } from '../vendors/vendor-list';

@Component({
  selector: 'app-world-state',
  imports: [Calendar1999, VendorList, AlertList, FissureList, InvasionList],
  templateUrl: './world-state.html',
  styleUrl: './world-state.scss',
})
export class WorldState {
  private widgets = ['alerts', 'vendors', 'calendar', 'invasions', 'fissures'];
  private columnCount = 3;

  @HostListener('window:resize')
  onResize() {
    this.setColumnCount();
  }

  ngOnInit() {
    this.setColumnCount();
  }

  setColumnCount() {
    const width = window.innerWidth;
    if (width <= 768) this.columnCount = 1;
    else if (width <= 1400) this.columnCount = 2;
    else this.columnCount = 3;
  }

  getColWidgets(colIdx: number) {
    return this.widgets.filter((_, i) => i % this.columnCount === colIdx);
  }

  get columnIndices() {
    return Array.from({ length: this.columnCount }, (_, i) => i);
  }
}
