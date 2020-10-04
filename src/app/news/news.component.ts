import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  
  newUrl = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6"
    
  results:any;
  imgUrl = ".media[0]['media-metadata'][2].url";
  
  constructor( public http: HttpClient) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.http.get(this.newUrl).subscribe( (data) => { 
      // console.log( data ); 
      this.results =   data;
      this.results = this.results.results;
      // this.imgUrl = this.results[0].media[0]['media-metadata'][2].url;
      // console.log (this.results[0].media[0]['media-metadata'][2].url)
      
      console.log(this.results)
    } );
  }
  
}

