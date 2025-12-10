import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bindings } from './bindings/bindings';
import { NavBar } from './nav-bar/nav-bar';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ClassiInterfacce } from './classi-interfacce/classi-interfacce';
import { ComunicazioneFraComponenti } from './comunicazione-fra-componenti/comunicazione-fra-componenti';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Header, Footer, ClassiInterfacce, ComunicazioneFraComponenti],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corso-angular');
}

