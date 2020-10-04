// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {AuthguardService} from './authguard.service'

import { NewsComponent } from './news/news.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { NytArchiveComponent } from './nyt-archive/nyt-archive.component';
import { NytBooksComponent } from './nyt-books/nyt-books.component';
import { NytRssFeedComponent } from './nyt-rss-feed/nyt-rss-feed.component';
import { NytTopStoriesComponent } from './nyt-top-stories/nyt-top-stories.component';

const routes: Routes = [
  { path:"", redirectTo: "nytstories", pathMatch: "full" },
  { path: "news",  component: NewsComponent },
  { path: "searchnews", component: NewsSearchComponent },
  { path: "nytarchive",  component: NytArchiveComponent },
  { path: "nytbooks",  component: NytBooksComponent },
  { path: "nytrss",  component: NytRssFeedComponent },
  { path: "nytstories",  component: NytTopStoriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
