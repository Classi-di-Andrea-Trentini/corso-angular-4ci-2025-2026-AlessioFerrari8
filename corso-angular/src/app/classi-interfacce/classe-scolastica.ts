import { ThisReceiver } from "@angular/compiler";
import { Studente } from "./studente";

export class ClasseScolastica {
  _studenti: Studente[] = [];
  _nomeClasse: string = '';
  _annoScolastico: string = '';

  constructor(nomeClasse: string, annoScolastico: string) {
    this.nomeClasse = nomeClasse; // setter
    this.annoScolastico = annoScolastico;
  }

  public get nomeClasse() : string {
    return this._nomeClasse;
  }

  public set nomeClasse(value: string) {
    // controllo se il nome della classe è corretto
    // ovvero deve esserci un numero, sezione e indirizzo
    // suggerimento: regex

    // regex
    const regex = /^[1-5][A-S][iame]?$/;

    /*
    /^ e $/ inizio e fine
    all'interno si mettono le regole
    1. numero nell'intervallo da 1 a 5
    2. possibili valori (lettere da A a S)
    3. specifichiamo le lettere possibili
    ? -> la condizione 3 può esserci o no
    */

    if (regex.test(value)) { // test da vero o falso
      this._nomeClasse = value;
    } else {
      throw new Error('Nome della classe errato');
    }

  }

  public set annoScolastico(value: string) {
    const regex = /^20\d{2}\/20\d{2}$/;
    if (regex.test(value)) {
      this._annoScolastico = value;
    } else {
      throw new Error('Formato anno scolastico non corretto');
    }
  }

  public aggiungiStudente(studente: Studente): void {
    studente.classe = this.nomeClasse;
    this._studenti.push(studente);
  }

  public eliminaStudente(index: number) {
    this._studenti.splice(index, 1);
  }

  public modificaStudente(index: number, nuovo: Studente): void {
    nuovo.classe = this.nomeClasse;
    this._studenti[index] = nuovo;
  }

  public toTable(): string {
    let tmp = `<table class="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cognome</th>
                    <th scope="col">Sesso</th>
                    <th scope="col">Classe</th>
                  </tr>
                </thead>
                <tbody>` +
                this._studenti.map(studente => studente.toTable()).join('') +
              ` </tbody>
              </table>`;

    return tmp;
  }



}
