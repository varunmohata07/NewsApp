import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HitachinewsService } from './service/hitachinews.service';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { ScienceComponent } from './science/science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SearchComponent } from './search/search.component';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnologyComponent,
    SportsComponent,
    BusinessComponent,
    ScienceComponent,
    EntertainmentComponent,
    SearchComponent,
    FavouriteComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [HitachinewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
