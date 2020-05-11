import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IconSetComponent } from '../icon-set.component';

import { SparkAngularModule } from "@sparkdesignsystem/spark-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [AppComponent,IconSetComponent, DonutsComponent, DonutDetailComponent, PeopleComponent, PersonComponent],
  imports: [
    SparkAngularModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
