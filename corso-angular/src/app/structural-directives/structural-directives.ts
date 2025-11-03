import { Component, signal, WritableSignal } from '@angular/core';

@Component({ // decoratore
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css'
})

export class StructuralDirectives {
  visualizza: WritableSignal<boolean> = signal(false);

  toggleVisualizza(): void {
    this.visualizza.update(valoreCurrent => !valoreCurrent); // espressione lambda
  }


}
