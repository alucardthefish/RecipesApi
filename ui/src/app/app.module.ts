import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular";
import { HomeComponent } from './components/home/home.component';
import { CuadriculaComponent } from './components/cuadricula/cuadricula.component';
import { HttpClientModule } from '@angular/common/http';
import { AthletesComponent } from './components/athletes/athletes.component';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CuadriculaComponent,
    AthletesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
