import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NewsComponent } from './news/news.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { NytArchiveComponent } from './nyt-archive/nyt-archive.component';
import { NytBooksComponent } from './nyt-books/nyt-books.component';
import { NytRssFeedComponent } from './nyt-rss-feed/nyt-rss-feed.component';
import { NytTopStoriesComponent } from './nyt-top-stories/nyt-top-stories.component';



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsSearchComponent,
    NytArchiveComponent,
    NytBooksComponent,
    NytRssFeedComponent,
    NytTopStoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
