import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bindings } from './bindings/bindings';
import { NavBar } from './nav-bar/nav-bar';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { StructuralDirectives } from './structural-directives/structural-directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bindings, NavBar, Header, Footer, StructuralDirectives],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corso-angular');
}

