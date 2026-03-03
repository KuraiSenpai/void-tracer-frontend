import { Component } from '@angular/core';
import { Calendar1999 } from "../calendar/calendar";
import { VendorList } from "../vendors/vendor-list";
import { AlertList } from "../alerts/alert-list";
import { FissureList } from "../fissures/fissure-list";
import { InvasionList } from "../invasions/invasion-list";

@Component({
  selector: 'app-world-state',
  imports: [Calendar1999, VendorList, AlertList, FissureList, InvasionList],
  templateUrl: './world-state.html',
  styleUrl: './world-state.scss',
})
export class WorldState {

}
