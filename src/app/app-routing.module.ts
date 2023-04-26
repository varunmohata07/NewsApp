import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HomeComponent } from './home/home.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'tech', component:TechnologyComponent},
  {path:'business', component:BusinessComponent},
  {path:'entertainment', component:EntertainmentComponent},
  {path:'sports', component:SportsComponent},
  {path:'science', component:ScienceComponent},
  {path:'fav', component: FavouriteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
