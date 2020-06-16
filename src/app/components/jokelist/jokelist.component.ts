import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';

@Component({
    selector: 'jokelist',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
  })
 export class JokeListComponent {
    jokes: Joke[];
  
    constructor() {
      this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
      ];
    }

    addJoke(joke: any) {
      this.jokes.unshift(joke);
    }
  }
