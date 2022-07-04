import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,tap } from 'rxjs';
import { Hashtag } from './Hashtag';

@Injectable({
  providedIn: 'root'
})
export class TweetsSearchService {


  url='https://social-analytics-api.comwork.io/v1/tweets?as_array=true'

  constructor(private http : HttpClient) { }

  getTweets(hashtgag : string , count : string ) :Observable<Hashtag[]>
  {

    let queryParams = new HttpParams();
    queryParams = queryParams.append('hashtag', hashtgag);
    queryParams = queryParams.append('count', count);
   
    
    //console.log('Headers Value = ' + queryParams.toString);
    console.log('data service : ' + this.http.get<Hashtag[]>(this.url , {params:queryParams}).subscribe(data=>{data.toString}));
    return this.http.get<Hashtag[]>(this.url , {params:queryParams});
   
  }
}

