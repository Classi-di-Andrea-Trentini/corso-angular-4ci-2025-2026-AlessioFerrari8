import { ClasseScolastica } from './classe-scolastica';
import { Component, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-classi-interfacce',
  imports: [],
  templateUrl: './classi-interfacce.html',
  styleUrl: './classi-interfacce.css'
})
export class ClassiInterfacce {
  // se non si vuole assegnare un valore ad una var/signal/attributo/... è sufficiente aggiungere un punto esclamativo dopo il nome della var
  classe!: WritableSignal<ClasseScolastica>;


  public creaClasse(nomeClasse: string, annoScolastico: string) {
    try {
      this.classe.set(new ClasseScolastica(nomeClasse, annoScolastico))
    } catch (error) {

    }
  }

}
