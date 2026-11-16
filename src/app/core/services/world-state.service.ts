import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, switchMap, timer } from 'rxjs';
import { env } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WorldStateService {
  private baseUrl = env.apiUrl;
  private worldStateCache$?: Observable<any>;

  private readonly REFRESH_INTERVAL_MS = 60_000;

  constructor(private http: HttpClient) {}

  public getWorldState(): Observable<any> {
    if (!this.worldStateCache$) {
      this.worldStateCache$ = timer(0, this.REFRESH_INTERVAL_MS).pipe(
        switchMap(() => this.http.get<any>(`${this.baseUrl}/worldState`)),
        shareReplay({ bufferSize: 1, refCount: true }),
      );
    }
    return this.worldStateCache$;
  }
}
