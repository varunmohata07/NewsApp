import { Component, OnInit } from '@angular/core';
import { HitachinewsService } from '../service/hitachinews.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})

export class BusinessComponent implements OnInit{
  constructor(private api: HitachinewsService) {}
  //Display Business Data
  businessNewsData:any = [];

  //Search Bar
  searchText: string = '';

//Search Function
onSearchTextEntered(searchValue: string){
  this.searchText=searchValue;
  console.log(this.searchText);
}

addFav(i:number){
  let news = {
    newstitle : this.businessNewsData[i].title,
    newscontent :this.businessNewsData[i].content
  }

  this.api.tcBaseUrl(news);
  alert("Added")
  
}

  //Business Data Function
  ngOnInit(): void {
    this.api.tcBusinessNews().subscribe((result) => {
      console.log(result.articles);
      this.businessNewsData = result.articles;
    });
  }
}