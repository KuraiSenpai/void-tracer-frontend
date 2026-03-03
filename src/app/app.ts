import { Component, signal } from '@angular/core';
import { AlertList } from './features/alerts/alert-list';
import { Calendar1999 } from './features/calendar/calendar';
import { FissureList } from './features/fissures/fissure-list';
import { InvasionList } from './features/invasions/invasion-list';
import { VendorList } from './features/vendors/vendor-list';

@Component({
  selector: 'app-root',
  imports: [AlertList, FissureList, VendorList, InvasionList, Calendar1999],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('warframe-web');
}
