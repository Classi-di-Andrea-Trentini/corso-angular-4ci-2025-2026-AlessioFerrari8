import { Component, signal, WritableSignal } from '@angular/core';
import { VisualizzaElenco } from './visualizza-elenco/visualizza-elenco';
import { IDocente } from '../classi-interfacce/i-docente';

@Component({
  selector: 'app-comunicazione-fra-componenti',
  imports: [VisualizzaElenco],
  templateUrl: './comunicazione-fra-componenti.html',
  styleUrl: './comunicazione-fra-componenti.css'
})
export class ComunicazioneFraComponenti {
  // array vuoto
  docenti: WritableSignal<IDocente[]> = signal([]);

  aggiungiDocente(): void {
    this.docenti.set([
      {id: 1, cognome: "Trentini", nome: "Andrea", materie: [], classi: []},
      {id: 2, cognome: "Sannicolo", nome: "Federico", materie: [], classi: []},
      {id: 3, cognome: "Rossi", nome: "Mario", materie: [], classi: []},
    ])
  }

}
