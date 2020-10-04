import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-news-search',
  templateUrl: './news-search.component.html',
  styleUrls: ['./news-search.component.css']
})
export class NewsSearchComponent implements OnInit {

  searchArtical="";
  source:("The New York Times");
  urlNyt = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+this.searchArtical+"&api-key=w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6"
  response:any;

  constructor( public http: HttpClient) { }

  ngOnInit(): void {
    this.getSearch();
  }

  getSearch() {
    return this.http.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+this.searchArtical+"&api-key=w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6").subscribe( (data) => {
      this.response = data;
      this.response = this.response.response.docs;
      console.log( this.response );
    } )
  }
  searchNews() {
    
    this.searchArtical = this.searchArtical;
    // console.log(this.searchArtical);
    this.getSearch();
  }

}
