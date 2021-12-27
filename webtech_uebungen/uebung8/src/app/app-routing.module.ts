import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AuthguardGuard } from './authguard.guard';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  {path: "about", component: AboutComponent},
  {path: "login", component: LoginComponent},
  {path: "cities", component: CitiesComponent, canActivate: [AuthguardGuard]},
  {path: "cities/:id", component: CityComponent, canActivate: [AuthguardGuard]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
