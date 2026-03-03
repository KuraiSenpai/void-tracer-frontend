import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { WorldState } from 'warframe-worldstate-parser';
import { env } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WorldStateService {
  private baseUrl = env.apiUrl;
  private worldStateCache$?: Observable<WorldState>;

  constructor(private http: HttpClient) {}

  public getWorldState(): Observable<WorldState> {
    if (!this.worldStateCache$) {
      this.worldStateCache$ = this.http.get<WorldState>(`${this.baseUrl}/dynamic/worldState`).pipe(shareReplay(1));
    }
    return this.worldStateCache$;
  }
}
