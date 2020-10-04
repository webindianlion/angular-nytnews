import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';


@Component({
  selector: 'app-nyt-rss-feed',
  templateUrl: './nyt-rss-feed.component.html',
  styleUrls: ['./nyt-rss-feed.component.css']
})
export class NytRssFeedComponent implements OnInit {

  url = "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml";

  constructor( public http:HttpClient) { }

  ngOnInit(): void {
    this.getRss();
  }

  getRss() {
    this.http.get(this.url, { responseType: 'text' }).subscribe( (data) => {
      data = JSON.stringify(data);
      console.log(data);
    } );
  }

}

// https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml
// w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6