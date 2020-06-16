import { Input, Component } from "@angular/core";
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {
  @Input('joke') data: Joke;
}