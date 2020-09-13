import { Component } from '@angular/core';
import { Joke } from 'src/app/models/joke.model';
import {HttpClient} from "@angular/common/http";
@Component({
    selector: 'jokelist',
    templateUrl: './jokelist.component.html',
    styleUrls: ['./jokelist.component.css']
  })
 export class JokeListComponent {
    jokes: Joke[];
    apiRoot: string = "http://localhost:8080";
    courses:string[];

    constructor(private http: HttpClient) {
      this.jokes = [
        new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
        new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
        new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
      ];
    }

    addJoke(joke: any) {
      this.jokes.unshift(joke);
    }

    ngOnInit() {
    console.log("GET");
    let url = `${this.apiRoot}/course`;
    this.http.get(url).subscribe(response => {console.log(response);
      this.handleSuccessfulResponse(response);
    });
  }

handleSuccessfulResponse(response)
{
    this.courses=response;
}

  }
