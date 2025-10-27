import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bindings } from './bindings/bindings';
import { NavBar } from './nav-bar/nav-bar';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bindings, NavBar, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corso-angular');
}

