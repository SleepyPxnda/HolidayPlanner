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
import {UploadIcon} from "primeng/icons/upload";


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayComponent,
    NavbarComponent
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
        UploadIcon,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
