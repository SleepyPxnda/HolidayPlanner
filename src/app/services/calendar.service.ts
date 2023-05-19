import { Injectable } from '@angular/core';
import {Day, Month} from "../models/calendar.models";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  months: Month[] = [];

  constructor() {
    this.fillMonthsArray(2023);
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getMonthAsString(year: number, month: number): string{
    return new Date(year, month).toLocaleString('de-DE', { month: 'long' });
  }

  fillMonthsArray(year: number) {
    this.months = [];

    for(let month = 0; month < 12; month++) {
      const daysInCurrentMonth = this.daysInMonth(month, year);
      let days :Day[] = [];

      for(let day = 1; day <= daysInCurrentMonth; day++){
        days.push({date: new Date(year, month, day), isFreeDay: false, isSelected: false});
      }

      this.months.push({days: days,
        name: this.getMonthAsString(year, month),
        number: month})
    }
  }
}
