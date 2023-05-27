import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { DayComponent } from './day/day.component';
import { CardModule} from "primeng/card";
import { DropdownModule} from "primeng/dropdown";
import { FormsModule} from "@angular/forms";
import { PaginatorModule} from "primeng/paginator";
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { TooltipModule } from 'primeng/tooltip';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { SaveDialogComponent } from './dialogs/save-dialog/save-dialog.component';
import {DialogModule} from "primeng/dialog";
import {InputTextareaModule} from "primeng/inputtextarea";
import { LoadDialogComponent } from './dialogs/load-dialog/load-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    NavbarComponent,
    SaveDialogComponent,
    LoadDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    DropdownModule,
    FormsModule,
    PaginatorModule,
    TooltipModule,
    ButtonModule,
    RippleModule,
    DialogModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
