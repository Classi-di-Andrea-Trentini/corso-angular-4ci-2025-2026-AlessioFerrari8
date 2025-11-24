import { ClasseScolastica } from './classe-scolastica';
import { Component, signal, WritableSignal } from '@angular/core';
import { Studente } from './studente';
import { timer } from 'rxjs';
import { IDocente } from './i-docente';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {
  // se non si vuole assegnare un valore ad una var/signal/attributo/... è sufficiente aggiungere un punto esclamativo dopo il nome della var
  classe: WritableSignal<ClasseScolastica | undefined> = signal(undefined); // o ClasseScolastica o undefined
  id: number = 1;
  visualizzaErrore: WritableSignal<string> = signal('');

  // Esempio di uso di interfacce
  docente: WritableSignal<IDocente | undefined> = signal({
    id: 1,
    nome: 'Andrea',
    cognome: 'Trentini',
    classi: ['3Bi', '4Ai', '4Bi', '4Ci'],
    materie: ['Informatica', 'TPSIT', 'Autonomia']
  });

  creaClasse(nomeClasse: string, annoScolastico: string) {
    try { // la crea solo se rispetta le regex
      this.classe.set(new ClasseScolastica(nomeClasse, annoScolastico));
    } catch (error: any) {
      this.visualizzaErrore.set(error);
      timer(4000).subscribe(() => {
        this.visualizzaErrore.set('');
      });

    }
  }

  aggiungiStudente(nome: string, cognome: string, sesso: string): void {
    this.classe()?.aggiungiStudente(new Studente(this.id, nome, cognome, sesso, this.classe()!.nomeClasse));
    this.id++;
  }



}
