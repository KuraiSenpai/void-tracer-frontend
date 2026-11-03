import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { env } from '../../../environments/environment';
import { AcrithisOfferings } from '../models/acrithis-offerings.model';

@Injectable({ providedIn: 'root' })
export class AcrithisService {
  private baseUrl = env.apiUrl;
  private AcrithisCache$?: Observable<any>;

  constructor(private http: HttpClient) {}

  public getWeeklyOfferings(): Observable<AcrithisOfferings> {
    if (!this.AcrithisCache$) {
      this.AcrithisCache$ = this.http.get<AcrithisOfferings>(`${this.baseUrl}/acrithis`).pipe(shareReplay(1));
    }
    return this.AcrithisCache$;
  }
}
