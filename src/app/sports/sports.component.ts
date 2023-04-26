import { Component, OnInit } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})

export class SportsComponent implements OnInit{
  constructor(private api: HitachinewsService) {}
  //Display Sports Data
  sportsNewsData:any = [];

    //Search Bar
    searchText: string = '';

    //Search Function
    onSearchTextEntered(searchValue: string){
      this.searchText=searchValue;
    }

    addFav(i:number){
      let news = {
        
        newstitle : this.sportsNewsData[i].title,
        newscontent :this.sportsNewsData[i].content
      }
  
      this.api.tcBaseUrl(news).subscribe((res)=>{
        alert("Added");
      });
      
      
    }

  ngOnInit(): void {
    this.api.tcSportsNews().subscribe((result) => {
      console.log(result.articles);
      this.sportsNewsData = result.articles;
    });
  }
}

