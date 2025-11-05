import { Component, signal, WritableSignal } from '@angular/core';

@Component({ // decoratore
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css'
})

export class StructuralDirectives {
  // esempio 1
  visualizza: WritableSignal<boolean> = signal(false);

  // esempio 2
  immagineOTesto: WritableSignal<string> = signal('immagine');

  // esempio 3
  nomi: WritableSignal<string[]> = signal(['Andrea', 'Gianni', 'Federico', 'Luca']);
  indiceModifica: WritableSignal<number> = signal(-1);

  toggleVisualizza(): void {
    this.visualizza.update(valoreCurrent => !valoreCurrent); // espressione lambda
  }

  vaiAImmagine(): void {
    this.immagineOTesto.set('immagine');
  }

  vaiATesto(): void {
    this.immagineOTesto.set('testo');
  }

  aggiungiNome(nome: any): void {
    this.nomi.update(current => [...current, nome.value]); // metto gli elementi prima con ... e aggiungo

  }

  elimina(indice: number) : void {
    this.nomi.update(current => {
      current.splice(indice, 1);
      return current;
    })
  }

  modifica(indice: number): void {
    this.indiceModifica.set(indice);
  }


}
