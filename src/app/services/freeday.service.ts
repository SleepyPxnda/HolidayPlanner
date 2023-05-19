import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FeiertageResponse} from "../models/calendar.models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FreedayService {

  constructor(private http: HttpClient) {
  }


  requestFreeDays(year: number): Observable<FeiertageResponse> {
    return this.http.get<FeiertageResponse>("https://get.api-feiertage.de/?states=bw&years=" + year);
  }
}
