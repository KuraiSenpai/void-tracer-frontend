import { Component, signal } from '@angular/core';
import { AlertList } from './features/alerts/alert-list';
import { Calendar1999 } from './features/calendar/calendar';
import { FissureList } from './features/fissures/fissure-list';
import { InvasionList } from './features/invasions/invasion-list';
import { VendorList } from './features/vendors/vendor-list';
import { Header } from "./shared/components/header/header";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [AlertList, FissureList, VendorList, InvasionList, Calendar1999, Header, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('warframe-web');
}
