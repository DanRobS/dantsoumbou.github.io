import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css', './common.css']
})
export class App {
  protected readonly title = signal('dantsoumbou-github-io');
}
