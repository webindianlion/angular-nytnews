import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nyt-top-stories',
  templateUrl: './nyt-top-stories.component.html',
  styleUrls: ['./nyt-top-stories.component.css']
})
export class NytTopStoriesComponent implements OnInit {

  url = "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6";
  results:any;

  constructor( public http: HttpClient) { }

  ngOnInit(): void {
    this.getTopStories();
  }

  getTopStories() {
    this.http.get(this.url).subscribe( (data) => {
      this.results = data;
      this.results = this.results.results;

      this.results.forEach(element => {
        if(element.multimedia==null) {
          element.multimedia = [];
          element.multimedia.push({url:""})
        }
      });

      console.log(this.results);
    } );
  }

}
// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
// w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6