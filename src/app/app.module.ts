import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './components/joke/joke.component';
import { JokeListComponent } from './components/jokelist/jokelist.component';
import { JokeFormComponent } from './components/jokeform/jokeform.component';

@NgModule({
  declarations: [
    AppComponent,JokeComponent,JokeListComponent,JokeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
