import { Component } from '@angular/core';
import {CalendarService} from "../services/calendar.service";
import {ConfigurationService} from "../services/configuration.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  yearOptions: String[] = [];

  isSaveDialogVisible: boolean = false;
  isLoadDialogVisible: boolean = false;

  constructor(public calendarService: CalendarService, private configurationService: ConfigurationService) {
    this.genereateYearOptionsForDrowpdown();
  }

  private genereateYearOptionsForDrowpdown(){
    let date = new Date();
    [0,1,2].forEach(addition => this.yearOptions.push((date.getFullYear() + addition).toString()));
  }

  recalculateYear(newValue: any) {
    this.calendarService.fillMonthsArray(newValue.value);
  }

  loadData(){
    this.isLoadDialogVisible = true;
  }

  closeLoadDialog(data: string): void {
    this.calendarService.loadMonthsFromJson(data);


    this.isLoadDialogVisible = false;

  }

  saveData(): void {
    this.configurationService.prepareSaveData(this.calendarService.months)
    this.isSaveDialogVisible = true;
  }

  closeSaveDialog() {
    this.isSaveDialogVisible = false;
  }
}
