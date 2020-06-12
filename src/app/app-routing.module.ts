import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { RouteTrackingComponent } from './route-tracking/route-tracking.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'users', component: UsersPageComponent},
  {path: 'routes', component: RouteTrackingComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: '**', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
