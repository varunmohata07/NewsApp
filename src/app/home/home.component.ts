import { Component, OnInit } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchText: string = ''; // <-- Single declaration of searchText

  constructor(private api: HitachinewsService) {
  }

  //Display Headlines Data
  topHeadlinesData:any = [];


  //Search Function
  onSearchTextEntered(searchValue: string){
    this.searchText=searchValue;
  }

  addFav(i:number){
    let news = {
      newstitle : this.topHeadlinesData[i].title,
      newscontent :this.topHeadlinesData[i].content
    }

    this.api.tcBaseUrl(news).subscribe((res)=>{
    });
    alert("Added");
  }



  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result) => {
      console.log(result.articles);
      
      this.topHeadlinesData = result.articles;
    });
  }

}
