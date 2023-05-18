import {Component, Input} from '@angular/core';
import {Day} from "../models/calendar.models";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

  @Input()
  day!: Day;

  constructor() {
  }
  onDayCardClick() {
    this.day.isSelected = !this.day.isSelected;
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
      classes += 'bg-white '
    }

    return classes;
  }


  getDateAsWeekdayString(date: Date): string {
    return date.toLocaleString('de-DE', { weekday: 'long' });
  }

  getDateAsDayDate(date: Date): string{
    return date.toLocaleString('de-DE', {day: 'numeric', month: 'numeric', year: 'numeric'})
  }

}
