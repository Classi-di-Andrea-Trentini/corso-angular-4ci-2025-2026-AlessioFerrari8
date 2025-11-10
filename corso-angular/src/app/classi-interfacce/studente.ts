import { Persona } from "./persona";

export class Studente extends Persona{
  private _classe: string;

  // differenza con Persona: classe
  constructor(id: number, nome: string, cognome: string, sesso: string, classe: string) {
    super(id, nome, cognome, sesso);
    this._classe = classe;
  }

  public get classe() : string {
    return this._classe;
  }

  public cambiaClasse(value: string) {
    // controllo se il nome della classe è corretto
    // ovvero deve esserci un numero, sezione e indirizzo
    // suggerimento: regex
  }

  public override get cognome(): string {

  }
  public override set cognome(value: string) {

  }

  public override get id(): number {

  }
  public override get nome(): string {

  }
  public override set nome(value: string) {

  }
  public override get nomeCompleto(): string {

  }
  public override get sesso(): string {

  }
  public override set sesso(value: string) {

  }
  public override toString(): string {

  }

}
