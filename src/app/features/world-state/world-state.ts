import { Component } from '@angular/core';
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
export class WorldState {}
