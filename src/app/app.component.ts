import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'nyt';
  topMenu = [ {name:"Top Stories", link:"nytstories"}, { name:"Most Popular", link: "news" }, { name:"News By Search" , link:"searchnews"}, {name:"Archive", link:"nytarchive"}, {name:"NYT Books", link:"nytbooks"} ]
}
