import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html', // questo componente usa app.html per lo stile
  styleUrl: './app.css' // questo componente usa app.css per lo stile
})
export class App {
  protected readonly title = signal('hello-world');
}
