import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MaterialModule} from './material-module';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { RouteTrackingComponent } from './route-tracking/route-tracking.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ServicesService } from './services.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersPageComponent,
    RouteTrackingComponent,
    SettingsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA0I-6muOMwK2i21IdCqK12u25tEg-b-J0',
      libraries: ["places"]
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
