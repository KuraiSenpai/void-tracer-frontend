import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WarframeAlert } from "../models/warframe-alert.model";
import { env } from "../../../environments/environment";

/**
 * @deprecated Use WorldStateService instead
 */
@Injectable({ providedIn: 'root' })
export class AlertListService {
    private baseUrl = env.apiUrl;

    constructor(private http: HttpClient) { }

    getAlerts(): Observable<WarframeAlert[]> {
        return this.http.get<WarframeAlert[]>(`${this.baseUrl}/dynamic/alerts`);
    }
}