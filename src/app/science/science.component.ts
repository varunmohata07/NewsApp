import { Component, OnInit } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit{
  constructor(private api: HitachinewsService) {}
  //Display Sports Data
  scienceNewsData:any = [];

    //Search Bar
    searchText: string = '';

    //Search Function
    onSearchTextEntered(searchValue: string){
      this.searchText=searchValue;
    }

    addFav(i:number){
      let news = {
        newstitle : this.scienceNewsData[i].title,
        newscontent :this.scienceNewsData[i].content
      }
  
      this.api.tcBaseUrl(news);
      alert("Added")
      
    }

  ngOnInit(): void {
    this.api.tcScienceNews().subscribe((result) => {
      console.log(result.articles);
      this.scienceNewsData = result.articles;
    });
  }
}
