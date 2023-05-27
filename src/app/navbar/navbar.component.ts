import { Component } from '@angular/core';
import {CalendarService} from "../services/calendar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  yearOptions: String[] = [];

  constructor(public calendarService: CalendarService) {
    this.genereateYearOptionsForDrowpdown();
  }

  private genereateYearOptionsForDrowpdown(){
    let date = new Date();
    [0,1,2].forEach(addition => this.yearOptions.push((date.getFullYear() + addition).toString()));
  }

  recalculateYear(newValue: any) {
    this.calendarService.fillMonthsArray(newValue.value);
  }
}
