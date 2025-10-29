import { TmplAstHostElement } from '@angular/compiler';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-bindings',
  imports: [],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css'
})
export class Bindings implements OnInit{
  // Dichiarazione delle variabili prevede nome: tipo = valore iniziale --> meglio associare un valore iniziale
  studente: WritableSignal<string> = signal("Alessio Ferrari");
  contatore: WritableSignal<number> = signal(0);

  immagini: string[] = ['/aereo.jpg', '/auto.jpg', '/beatles.jpg', '/ledzeppelin.jpg'];
  indiceImmagine: WritableSignal<number> = signal(0);
  
  colori: string[] = ['red', 'green', 'yellow', 'blue'];
  colore: WritableSignal<string> = signal(this.colori[0]);

  cronometro!: Observable<any> ;

  cambiaNome(): void {
    // Corpo del metodo
    this.studente.set("Federico Esposito");
  }

  incrementa(): void {
    // this.contatore.set(this.contatore() + 1); --> va bene, ma non la migliore
    this.contatore.update(valorePrecedente => valorePrecedente + 1); // metodo update
    // update
    // Il metodo update accetta 2 parametri: valore attuale => prossimo valore
    // - valore attuale
    // - funzione di callback che definisce come calcolare il nuovo valore da assegnare al signal
  }

  decrementa(): void {
    this.contatore.update(valorePrecedente => valorePrecedente - 1); // metodo update
  }

  precedente(): void {
    this.indiceImmagine.update(valoreAttuale => valoreAttuale - 1);
  }

  successivo(): void {
    this.indiceImmagine.update(valoreAttuale => valoreAttuale + 1);
  }

  cambiaColore(): void {
    this.colore.set(this.colori[Math.round(Math.random() * 3)]);
  }

  ngOnInit(): void {
    this.cronometro = interval(1000).subscribe(() => {
      this.cambiaColore();
    });
  }

}
