import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, catchError, fromEvent, Observable, of,distinctUntilChanged ,debounceTime ,tap, merge } from 'rxjs';
import { Hashtag } from '../Hashtag';
import { TweetsSearchService } from '../tweets-search.service';

@Component({
  selector: 'app-tweets-search',
  templateUrl: './tweets-search.component.html',
  styleUrls: ['./tweets-search.component.css']
})

export class TweetsSearchComponent implements OnInit, AfterViewInit{

  count !: any ;
  hashtag !: string ;
  Tweetdata !: Hashtag[] ; 
  public dataSource !: TweetsDataSource;  
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  etat= true ; 
  tweet !: Hashtag ;

  displayedColumns =['name','lng' , 'content','timestamp'];

  constructor( private tweetService :TweetsSearchService) { }
 

  ngOnInit(): void {

  }


public searchTweets()
{

console.log(this.count+':'+this.hashtag);

this.dataSource = new TweetsDataSource(this.tweetService);
this.dataSource.loadTweets(this.hashtag,this.count);

console.log(this.dataSource);
this.etat=false ;
}


ngAfterViewInit() {
  this.paginator.page
      .pipe(
          tap(() => this.searchTweets())
      )
      .subscribe();
}

}






export class TweetsDataSource implements DataSource<Hashtag> {

  private tweetSubject = new BehaviorSubject<Hashtag[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  constructor(private tweetsService: TweetsSearchService) {}

  connect(collectionViewer: CollectionViewer): Observable<Hashtag[]> {
      return this.tweetSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
      this.tweetSubject.complete();
      this.loadingSubject.complete();
  }


/*Loads Tweets  */


  loadTweets(hashtag : string ,count : any ) {

      this.loadingSubject.next(true);

      this.tweetsService.getTweets(hashtag, count)
      .pipe(
      catchError(() => of([])))
      .subscribe(tweet => {this.tweetSubject.next(tweet)
      ; console.log(this.tweetSubject)}  );
  }    


}