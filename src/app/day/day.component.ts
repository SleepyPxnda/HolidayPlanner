import {Component, Input} from '@angular/core';
import {Day} from "../models/calendar.models";
import {CalendarService} from "../services/calendar.service";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

  @Input()
  day!: Day;

  constructor(private calendarService: CalendarService) {
  }
  onDayCardClick() {
    this.day.isSelected = !this.day.isSelected;
    this.calendarService.countUsedDays();
  }

  getClassesForCard(): string {
    let classes = '';

    if(this.day.isSelected){
      classes += 'card-selected '
    }

    if([6,0].includes(this.day.date.getDay())){
      classes += 'card-weekend '
    }

    if(this.day.isFreeDay){
      classes += 'card-freeday '
    }

    if(classes === ''){
      classes += 'bg-gray-400 '
    }

    return classes;
  }


  getDateAsWeekdayString(date: Date): string {
    return date.toLocaleString('de-DE', { weekday: 'long' });
  }
}
