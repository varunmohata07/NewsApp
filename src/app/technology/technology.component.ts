import { Component, OnInit } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';


@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit{
  constructor(private api: HitachinewsService) {}
  //Display Technews Data
  techNewsData:any = [];

    //Search Bar
    searchText: string = '';

    //Search Function
    onSearchTextEntered(searchValue: string){
      this.searchText=searchValue;
    }

    addFav(i:number){
      let news = {
        newstitle : this.techNewsData[i].title,
        newscontent :this.techNewsData[i].content
      }
  
      this.api.tcBaseUrl(news).subscribe((res)=>{
      });
      alert("Added");
    }

  ngOnInit(): void {
    this.api.tcTechNews().subscribe((result) => {
      console.log(result.articles);
      this.techNewsData = result.articles;
    });
  }

}
