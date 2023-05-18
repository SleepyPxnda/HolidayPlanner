import { Component } from '@angular/core';
import {CalendarService} from "../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  selectedYear: string = '';
  yearOptions: string[];
  amountOfFreeDays: number = 30;
  alreadySelectedDays: number = 0;

  constructor(public calendarService: CalendarService) {
    console.log(calendarService.months);

    this.yearOptions = [0, 1, 2, 3].map(addYear => {
      const year = new Date().getFullYear()
      return year + addYear;
    }).map(year => year.toString());
  }
}
