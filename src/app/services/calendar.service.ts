import { Injectable } from '@angular/core';
import {Day, Month} from "../models/calendar.models";
import {FreedayService} from "./freeday.service";

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  months: Month[] = [];
  currentYear: number = 2023;
  usedDays: number = 0;

  constructor(private freeDayService: FreedayService) {
    this.fillMonthsArray(this.currentYear);
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  getMonthAsString(year: number, month: number): string{
    return new Date(year, month).toLocaleString('de-DE', { month: 'long' });
  }

  fillMonthsArray(year: number) {
    this.months = [];

    this.freeDayService.requestFreeDays(year).subscribe(
      {next: data => {
          let holidays = data.feiertage.map(tag => {
            return {date: tag.date, name: tag.fname}
          })

          for(let month = 0; month < 12; month++) {
            const daysInCurrentMonth = this.daysInMonth(month, year);
            let days :Day[] = [];

            for(let day = 1; day <= daysInCurrentMonth; day++){
              const freeDay = holidays.find(holiday => `${year}-${(month + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}` === holiday.date)
              if(freeDay){
                days.push({date: new Date(year, month, day), isFreeDay: true, isSelected: false, freeDayTitle: freeDay.name});
              } else {
                days.push({date: new Date(year, month, day), isFreeDay: false, isSelected: false});
              }
            }

            this.months.push({days: days,
              name: this.getMonthAsString(year, month),
              number: month,
              holidays: 0})
          }
        }}
    );
  }

  calculateUsedDaysForYear(): void {
    let usedDays = 0;
    this.months.forEach(month => usedDays += month.days.filter(day => day.isSelected).length)
    this.usedDays = usedDays;
  }

  calculatedHolidaysInMonth(): void{
    this.months.forEach(month => month.holidays = month.days.filter(day => day.isSelected).length);
  }

  loadMonthsFromJson(data: string) {
    //TODO implement loading
  }
}
