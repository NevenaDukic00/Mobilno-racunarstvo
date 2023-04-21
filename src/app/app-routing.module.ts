import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"myTickets",
    component:MyMoviesComponent
  },
  {
    path:"registration",
    component:RegistrationComponent
  },
  {
    path:"reservation",
    component:ReservationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
