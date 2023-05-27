import { Injectable } from '@angular/core';
import {Month} from "../models/calendar.models";

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  saveData: string = "";

  constructor() { }

  prepareSaveData(months: Month[]): void {
    this.saveData = JSON.stringify(months);
  }
}
