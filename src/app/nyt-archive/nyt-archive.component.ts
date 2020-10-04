import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-nyt-archive',
  templateUrl: './nyt-archive.component.html',
  styleUrls: ['./nyt-archive.component.css']
})
export class NytArchiveComponent implements OnInit {

  response:any;
  nytUrl = "https://api.nytimes.com/svc/archive/v1/2020/8.json?api-key=w4uXI2lQhC8KYdzGZvnQgoUsA6IGcpN6"

  constructor( public http:HttpClient ) { }

  ngOnInit(): void {
    this.getArchive();
  }

  getArchive() {
    this.http.get(this.nytUrl).subscribe( (data) => {
      this.response = data;
      this.response =this.response.response.docs;
      
      this.response.forEach(element => {
        if(element.multimedia.length==0) {
          element.multimedia.push({url:""})
        }
      });
      this.response = this.response.slice(0,10)
      // console.log(this.response[9].multimedia.length);
    })
  }

}
