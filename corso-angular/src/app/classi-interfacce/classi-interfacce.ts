import { ClasseScolastica } from './classe-scolastica';
import { Component, signal, WritableSignal } from '@angular/core';
import { Studente } from './studente';

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

  creaClasse(nomeClasse: string, annoScolastico: string) {
    try { // la crea solo se rispetta le regex
      this.classe.set(new ClasseScolastica(nomeClasse, annoScolastico));
    } catch (error) {
      console.log(error);
    }
  }

  aggiungiStudente(nome: string, cognome: string, sesso: string): void {
    this.classe()?.aggiungiStudente(new Studente(this.id, nome, cognome, sesso, this.classe()!.nomeClasse));
  }

}
