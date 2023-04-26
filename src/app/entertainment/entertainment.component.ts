import { Component, OnInit } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})

export class EntertainmentComponent implements OnInit{
  constructor(private api: HitachinewsService) {}
  //Display Entertainment Data
  entertainmentNewsData:any = [];

    //Search Bar
    searchText: string = '';

    //Search Function
    onSearchTextEntered(searchValue: string){
      this.searchText=searchValue;
    }

    addFav(i:number){
      let news = {
        newstitle : this.entertainmentNewsData[i].title,
        newscontent :this.entertainmentNewsData[i].content
      }
  
      this.api.tcBaseUrl(news);
      alert("Added")
      
    }

  ngOnInit(): void {
    this.api.tcEntertainmentNews().subscribe((result) => {
      console.log(result.articles);
      this.entertainmentNewsData = result.articles;
    });
  }
}


