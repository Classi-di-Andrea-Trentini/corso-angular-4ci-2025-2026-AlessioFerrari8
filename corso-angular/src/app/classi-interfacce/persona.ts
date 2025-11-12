export class Persona {
  // Attributi della classe
  private _id: number; // inizializzo o a 0, o metto subito nel costruttore
  private _nome: string = '';
  private _cognome: string = '';
  private _sesso: string;

  constructor(id: number, nome: string, cognome: string, sesso: string) {
    this._id = id;
    this.nome = nome;
    this.cognome = cognome;
    this._sesso = sesso;
  }

  // getter
  public get id(): number {
    return this._id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get cognome(): string {
    return this._cognome;
  }

  public get sesso(): string {
    return this._sesso;
  }

  public get nomeCompleto(): string {
    return this._nome + ' ' + this._cognome;
  }

  // setter

  public set nome(value: string) {
    if (value.length > 0) {
      this._nome = value;
    } else {
      throw new Error('Il nome è obbligatorio');
    }
  }

  public set cognome(value: string) {
    if (value.length > 0) { // controllo che sia > 0
      this._cognome = value;
    } else {
      throw new Error('Il nome è obbligatorio');
    }
  }

  public set sesso(value: string) {
    this._sesso = value;
  }

  // metodi della classe
  public toString(): string {
    return this._id + ' ' + this._nome + ' ' + this._cognome;
  }

}
