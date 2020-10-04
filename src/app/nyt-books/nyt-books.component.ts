import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nyt-books',
  templateUrl: './nyt-books.component.html',
  styleUrls: ['./nyt-books.component.css']
})
export class NytBooksComponent implements OnInit {

  url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6";
  results:any;
  constructor( public http:HttpClient ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.http.get(this.url).subscribe( (data) => {

      this.results = data;
      this.results = this.results.results.books;
      // this.results.forEach(element => {
      //   console.log(element.title);
      // });
      console.log(this.results);
    });
  }

}
