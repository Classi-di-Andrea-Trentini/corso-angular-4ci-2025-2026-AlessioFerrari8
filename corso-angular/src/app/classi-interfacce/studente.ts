import { Persona } from "./persona";

export class Studente extends Persona{
  private _classe: string = '';

  // differenza con Persona: classe
  constructor(id: number, nome: string, cognome: string, sesso: string, classe: string) {
    super(id, nome, cognome, sesso); // richiamo costruttore classe padre
    this.classe = classe;
  }

  public get classe() : string {
    return this._classe;
  }

  public set classe(value: string) {
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
      this._classe = value;
    } else {
      throw new Error('Nome della classe errato');
    }

  }

  public override toTable(): string {
    return '<tr><td scope="row">' + this.id + '</td><td>' + this.nome + '</td><td>' + this.cognome + '</td><td>' + this.sesso + '</td><td>' + this.classe + '</td></tr>';
  }

}
