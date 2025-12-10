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
  // signal per esempio su switch.
  // Possibili valori di tipo utente saranno: studente, docente, genitore
  tipoUtente: WritableSignal<string> = signal('studente');

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

  annulla(): void {
    this.indiceModifica.set(-1); // resettiamo indice
  }

  salva(nome: string, indice: number): void {
    this.nomi.update(current => {
      current[indice] = nome;
      return current;
    })
    this.indiceModifica.set(-1);
  }

  impostaStudente(): void {
    this.tipoUtente.set('studente');
  }

  impostaDocente(): void {
    this.tipoUtente.set('docente');
  }

  impostaGenitore(): void {
    this.tipoUtente.set('genitore');
  }

  impostaAltro(): void {
    this.tipoUtente.set('altro');
  }

}
