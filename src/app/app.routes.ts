import { Routes } from '@angular/router';
import { App } from './app';
import { WorldState } from './features/world-state/world-state';

export const routes: Routes = [
  { path: 'live', component: WorldState },
  { path: 'colors', component: App },

  { path: '**', redirectTo: '' },
];
