import { Component } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  
  //Display Fav
  FavNews: any[] = []

  constructor(private api: HitachinewsService) {
    this.getFav();
    console.log(this.FavNews);
  }
  
  getFav(){
    this.api.getNews().subscribe((res) =>{
      this.FavNews=res;
    })
  }
}
