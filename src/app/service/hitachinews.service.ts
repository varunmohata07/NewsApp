import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HitachinewsService {
  topHeadlinesNews: string;
  technologyNews: string;
  businessNews: string;
  entertainmentNews: string;
  sportsNews: string;
  scienceNews: string;
  tcSearchNews: string;
}

@Injectable({
  providedIn: 'root'
})
export class HitachinewsService {
  baseUrl = "http://localhost:8084/api/v1/news/save";

  topHeadlinesNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=c71ec76119724c37ab16e5f8405caede';
  technologyNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c71ec76119724c37ab16e5f8405caede';
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c71ec76119724c37ab16e5f8405caede';
  entertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c71ec76119724c37ab16e5f8405caede';
  sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c71ec76119724c37ab16e5f8405caede';
  scienceNews = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=c71ec76119724c37ab16e5f8405caede';
  tcSearchNews = 'https://newsapi.org/v2/everything?q=';

  constructor(private _http: HttpClient) { }

  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinesNews);
  }

  tcTechNews(): Observable<any> {
    return this._http.get(this.technologyNews);
  }

  tcBusinessNews(): Observable<any> {
    return this._http.get(this.businessNews);
  }

  tcEntertainmentNews(): Observable<any> {
    return this._http.get(this.entertainmentNews);
  }

  tcSportsNews(): Observable<any> {
    return this._http.get(this.sportsNews);
  }

  tcScienceNews(): Observable<any> {
    return this._http.get(this.scienceNews);
  }

  tcSearch(query: string): Observable<any> {
    const url = `${this.tcSearchNews}${query}&apiKey=c71ec76119724c37ab16e5f8405caede`;
    return this._http.get(url);
  }

  tcBaseUrl(data:any):Observable<any> {
   return this._http.post(this.baseUrl,data)
  }

  getNews():Observable<any>{
    return this._http.get("http://localhost:8084/api/v1/news/getNews")
  }
}
