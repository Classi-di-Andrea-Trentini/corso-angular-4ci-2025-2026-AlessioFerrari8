import { Component, input } from '@angular/core';
import { IDocente } from '../../classi-interfacce/i-docente';

@Component({
  selector: 'app-visualizza-elenco',
  imports: [],
  templateUrl: './visualizza-elenco.html',
  styleUrl: './visualizza-elenco.css'
})
export class VisualizzaElenco {
  // Indico che il componente in input riceve un array di docenti

  dati = input.required<IDocente[]>();

}
