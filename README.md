[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20964327)

# Lezione 08/10/2025

Web app -> esempio l'app del registro https://www.vivoscuola.it/Accedi-a

### Perché si perferiscono web app?
- ADATTABILITÀ -> si può usare su qualunque dispositivo
- SERVIZI CLOUD
- TECNOLOGIA RESPONSIVE

Motore chrome V8 -> javascript (si eseguiva solo nel browser)
<br>
Node.js -> ambiente di esecuzione per javascript (server-side, locale)
<br>
npm -> node package manager (gestore di pacchetti)
        ci permette di gestire dipendenze e librerie
<br>
[Angular](https://angular.dev/) -> framework basato su node.js 
<br>
[React](https://reactjs.org/) -> libreria basata su node.js 

## Docker
Docker è una piattaforma di container, che permette di creare, distribuire e eseguire applicazioni in ambienti isolati (container).

I container condividono il kernel del sistema host, ma eseguono processi isolati con le proprie dipendenze.

| **Virtual Machine (VM)** | **Docker Container** |
|--------------------------|----------------------|
| Emula un intero sistema operativo (OS completo) | Condivide l'OS host (solo binari/librerie necessarie) |
| **Hypervisor** necessario per astrazione hardware | **Docker Engine** gestisce i container direttamente sul SO |
| **Avvio lento** (minuti) | **Avvio istantaneo** (secondi) |
| **Alto consumo di risorse** (CPU, RAM, storage) | **Risorse ottimizzate** (leggero) |
| **Isolamento completo** | **Isolamento a livello di processo** |
| **Ideale per carichi di lavoro eterogenei** | **Perfetto per microservizi e app moderne** |

## Vantaggi di Docker 

### Portabilità
- Il container funziona identico su qualsiasi macchina (Linux, Windows, macOS)

### Omogeneità
- Elimina il problema "sul mio computer funziona"

## Esempio pratico

Usiamo Docker per eseguire un server **Nginx** che ospita l'app Angular buildata.


# Lezione 13/10/2025
**Open source** -> software con codice sorgente aperto
<br>
**Software gratuito** -> software che non costa nulla

npm -> posso usarla per un singolo progetto 
<br>
angular -> ha bisogno di aggiungere npm

globalmode -> aggiungere il pacchetto a tutti i progetti
<br>

localmode -> aggiungere il pacchetto solo a questo progetto

## Riferimenti

1. [Node.js](https://nodejs.org/en)
2. [Angular](https://angular.dev/)
3. [Repository prof. Trentini](https://github.com/andreatrentini/Corso-Angular-4Ci-2025-2026)

## Configurazione iniziale

1. Installare node.js [Scarica Node.js](https://nodejs.org/en)
2. Installare Angular

    ```bash
    npm install -g @angular/cli
    ```
    > -g -> global mode
4. Installare npm

    ```bash
    npm install -g npm@11.6.2
    ```
7. Vediamo angular
    ```bash
    ng version
    ```

## Creare la prima app
Comando

```bash
ng new nome-applicazione
```
> Quando usiamo la CLI di Angular, è consigliabile utilizzare tutti i nomi in minuscolo, senza spazi o caratteri speciali. Se un nome prevede due o più parole, si separano con trattini (-) -> KEBAB CASE

## Struttura applicazione
- .vscode: cartella nascosta usata da Visual Studio Code (**interesse zero**)
- node_modules: cartella sempre presente nei progetti Node.js, è gestita da npm, non contiene codice modificabile **(NON È NECESSARIO, ANZI FORTEMENTE SCORAGGIABILE PUSHARLA)**. In qualsiasi momento è possibile ricostruirla con il comando `npm install` (**interesse zero**)
- public: nella directory public vanno inseriti media (immagini, suoni, sfondi, filmati, ecc.) e veranno utilizzati nella web app
- src: cartella principale, contiene tutti i sorgenti dell'applicazione
    - style.css: stili globali applicazione
    - main.ts: punto d'accesso dell'applicazione (**di solito non si tocca**)
    - index.html: unica pagina HTML dell'applicazione
        > Con Angular si realizzano applicazioni SPA (Single Page Application)
    - app: cartella che normalmente contiene componenti, servizi, classi, interfacce, ...
        - app.config.ts: file di configurazione dell'applicazione
        - app.routes.ts: in questo file si specifica quale componente visualizzare a seconda della URL
        - app.html, app.css, app.ts, app.spec.ts: definiscono il componente chiamato app: 
            - app.html: template HTML del componente
            - app.css: stili del componente
            - app.ts: definizione business logic del componente
            **Ogni componente viene definito attraverso una classe**. Per far capire al builder che questa è una classe speciale, si usa il decoratore `@Component`
            ```typescript
            import { Component, signal } from '@angular/core';
            import { RouterOutlet } from '@angular/router';

            @Component({
                selector: 'app-root',
                imports: [RouterOutlet],
                templateUrl: './app.html', // questo componente usa app.html per lo stile
                styleUrl: './app.css' // questo componente usa app.css per lo stile
            })
            export class App {
                protected readonly title = signal('hello-world');
            }
            ```
            - app.spec.ts: codice per il test automatico dell'applicazione
- .editorconfig: configurazione dell'editor

- .gitignore: contiene l'elenco dei file e delle directory da escludere dai commit

- angular.json: configurazione dell'applicazione globale

- package.json, package-lock.json: npm install, grazie a questi due file, riesce a ricreare la directory node_modules da zero

- tsconfig.*: configurazione di Typescript


        

# Lezione 15/10/2025
### Build e deploy di un applicazione

Per eseguire il build dell'applicazione ed ottenere il file da pubblicare con un server web statico (le applicazioni non SSR non richiedono per il loro funzionamento un server node) eseguire il comando:

```bash
cd nome-applicazione
ng build
```

Verrà creata la directory dist/nome-applicazione/browser che conterrà i file dell'applicazione (index.html, style.css, main.js...). Per effettuare una prova con nginx e docker, dopo aver copiato i file in una directory (es app):


```bash
docker run --name webserver -p 6000:80 -v /workspaces/corso-angular-4ci-2025-2026-AlessioFerrari8/app/:/usr/share/nginx/html nginx
```

Il -p serve per la porta --> 6000:80 tra host e container
Il -v serve per montare la directory iniziale (/workspaces/...) su quella dell'host

Angular ci mette a disposizione un server web di sviluppo che avverte i cambiamenti apportati ai file html, css e typescript ed esegue in automatico il build dell'applicazione e pubblica sul web l'app aggiornata. Per avviare il server di sviluppo:

```bash
    ng serve
```

# Lezione 22/10/2025

Zoneless -> quando abbiamo fatto build c'era un file zone.js 
Si "risolve" il problema con i signal in angular.

## Basi frontend
- RESPONSIVE -> deve funzionare su tutti i dispositivi (smartphone, tablet, pc)
- MOBILE FIRST -> progettare prima per dispositivi mobili e poi per desktop (l'80% dei siti oggi viene visitato da smartphone)

## Bootstrap
Useremo [bootstrap](https://getbootstrap.com/) -> framework CSS per realizzare siti web responsive e mobile-first in modo semplice e veloce.

Per installare bootstrap:

```bash
cd corso-angular
npm install bootstrap
```

> ATTENZIONE: rendere con cd... la directory del progetto directory corrente
Configuriamo angular.json per includere bootstrap:

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
"scripts": [
    "node_modules/bootstrap/dist/js/bootstrap.bundle.js"
]
```
In questo modo bootstrap verrà incluso in tutte le pagine dell'applicazione, sia nel CSS che nel JS.

## Esempio di utilizzo di bootstrap

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>       
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
            </li>
        </ul>
    </div>
</nav>
```

## Componente
Creiamo un nuovo componente chiamato "binding" :

```bash
ng generate component bindings
```

# Lezione 27/10/2025

Vogliamo rendere il NavBar un componente riutilizzabile in tutta l'applicazione.
```bash
ng generate component nav-bar
```
Aggiungiamo in app.ts il componente NavBar
```typescript
import { NavBar } from './nav-bar/nav-bar';
...
@Component({
  selector: 'app-root',
    imports: [RouterOutlet, Bindings, NavBar],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
```
Generiamo anche un componente header e footer per l'applicazione
```bash
ng generate component header
ng generate component footer
```
Aggiungiamo in app.ts i componenti Header e Footer
```typescript
import { Header } from './header/header';
import { Footer } from './footer/footer';
...
@Component({
  selector: 'app-root',
    imports: [RouterOutlet, Bindings, NavBar, Header, Footer],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
```

### String interpolation
Con la string interpolation visualizzo nel template html un valore memorizzato in una "variabile" typescript.
**Possono essere usate solo variabili che sono attributi della classe Component.**
In un applicazione zoneless per garantire che la vista venga aggiornata, devo usare i signals.
###### Cos'è un signals?
Un signal è una funzione wrapper che gestisce un valore di qualsiasi tipo: numeri, stringhe, array, oggetti, ecc.
È la signal che controlla se un valore viene modificato e in tal caso marca la zona con quel valore come dirty, 
e quindi richiede il refresh del template html.
Quali sono gli step da seguire?
    - Dichiarare la signal in typescript
    - Inserire una chiamata alla funzione signal fra doppie parentesi graffe

```ts
studente: WritableSignal<string> = signal("Alessio Ferrari");
```

```html
Studente: {{studente()}}
<h3>Event binding</h3>
<button (click)="cambiaNome()">Cambia nome</button>
```

# Lezione 29/10/2025

## Tipi di Data Binding in Angular

In **Angular**, il *data binding* è il meccanismo che collega il **model (i dati)** e la **view (il template HTML)** in modo dinamico.  
Ci sono **4 principali tipi di binding**, ognuno con una direzione diversa di flusso dei dati.

---

## 🔹 1. Interpolation (Interpolazione)
**Direzione:** *Dal component → alla view*  
**Sintassi:** `{{ espressione }}`

Usata per mostrare valori di variabili o risultati di espressioni direttamente nell’HTML.

```html
<p>Ciao {{ nome }}!</p>
```

```typescript
export class AppComponent {
  nome = 'Mario';
}
```

✅ **Risultato in pagina:**
```
Ciao Mario!
```

---

## 🔹 2. Property Binding
**Direzione:** *Dal component → alla view*  
**Sintassi:** `[property]="espressione"`

Permette di impostare **proprietà HTML o di componenti** in base ai dati del componente TypeScript.

```html
<img [src]="immagineUrl" [alt]="descrizione">
<button [disabled]="isDisabled">Invia</button>
```

```typescript
immagineUrl = 'logo.png';
descrizione = 'Logo dell’app';
isDisabled = true;
```

---

## 🔹 3. Event Binding
**Direzione:** *Dalla view → al component*  
**Sintassi:** `(evento)="metodo()"`

Usata per ascoltare eventi del DOM o personalizzati e reagire nel component.

```html
<button (click)="saluta()">Clicca</button>
```

```typescript
saluta() {
  alert('Ciao!');
}
```

---

## 🔹 4. Style Binding
**Direzione:** *Dal component → alla view*  
**Sintassi:** `[style.prop]="espressione"`  

Permette di cambiare dinamicamente uno stile CSS direttamente dall’HTML.

```html
<p [style.color]="coloreTesto" [style.fontSize.px]="dimensioneTesto">
  Testo dinamico!
</p>

<button (click)="cambiaStile()">Cambia stile</button>
```

```typescript
export class AppComponent {
  coloreTesto = 'blue';
  dimensioneTesto = 16;

  cambiaStile() {
    this.coloreTesto = this.coloreTesto === 'blue' ? 'red' : 'blue';
    this.dimensioneTesto = this.dimensioneTesto === 16 ? 24 : 16;
  }
}
```

✳️ Quando l’utente clicca il pulsante, il colore e la dimensione del testo cambiano dinamicamente.

## 🔹 5. Class Binding

**Direzione:** *Dal component → alla view*
**Sintassi:** `[class.nomeClasse]="condizione"`

Permette di aggiungere o rimuovere dinamicamente classi CSS in base a condizioni definite nel component.

```html
<p [class.evidenziato]="isEvidenziato">
  Testo evidenziato dinamicamente!
</p>

<button (click)="toggleEvidenziato()">Cambia stato</button>
```

```typescript
export class AppComponent {
  isEvidenziato = false;

  toggleEvidenziato() {
    this.isEvidenziato = !this.isEvidenziato;
  }
}
```

✅ Quando `isEvidenziato` è `true`, il paragrafo assume la classe `evidenziato`.

---

## 🧩 Riepilogo

| Tipo di Binding      | Direzione        | Sintassi                          | Esempio                                       |
| -------------------- | ---------------- | --------------------------------- | --------------------------------------------- |
| **Interpolation**    | Component → View | `{{ ... }}`                       | `<p>{{ nome }}</p>`                           |
| **Property Binding** | Component → View | `[prop]="..."`                    | `<img [src]="url">`                           |
| **Event Binding**    | View → Component | `(event)="..."`                   | `<button (click)="onClick()">`                |
| **Style Binding**    | Component → View | `[style.prop]="..."`              | `<p [style.color]="colore"></p>`              |
| **Class Binding**    | Component → View | `[class.nomeClasse]="condizione"` | `<p [class.evidenziato]="isEvidenziato"></p>` |

# Lezione 03/11/2025
Rivisti i vari tipi di binding in Angular:
- Interpolation
- Property Binding
- Event Binding
- Style Binding
- Class Binding

## Direttive strutturali
Le direttive strutturali permettono di modificare la struttura del DOM, aggiungendo, rimuovendo o manipolando gli elementi HTML in base a condizioni specifiche.

Abbiamo visto due tipi di direttive strutturali:
- @if  (con il ramo else)
- @for

### @if
La direttiva `@If` ci consente di includere o escludere un elemento HTML in base al valore di una condizione booleana.
```html
<p>
    Il paragrafo in basso viene aggiunto al DOM se il valore del signal è true, altrimenti non viene aggiunto nulla.
</p>
<div>
    <button class="btn btn-primary" (click)="toggleVisualizza()">Visualizza/Nascondi</button>
</div>
@if (visualizza()) {
    <p>Questo è un paragrafo che appare e scompare</p>
}
```
```typescript
export class Bindings {
    protected visualizza: WritableSignal<boolean> = signal(false);

    protected toggleVisualizza(): void {
        this.visualizza.set(!this.visualizza());
    }
}
```
#### Il ramo else
Possiamo anche aggiungere un ramo else per specificare cosa visualizzare quando la condizione è falsa.

```html
@if (visualizza()) {
    <p>Questo è un paragrafo che appare e scompare</p>
} else {
    <p>Il paragrafo è nascosto</p>
}
```

### @for
La direttiva `@For` ci consente di iterare su una collezione di elementi e generare dinamicamente il contenuto HTML corrispondente.
```html
<div class="row">
    <div class="col-sm-6">
        <div>
            <div class="mb-3">
                <label for="inName" class="form-label">Nome</label>
                <input type="text" class="form-control" id="inName" placeholder="Aggiungi un nome..." #inNome>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div>
            <button class="btn btn-primary" (click)="aggiungiNome(inNome)">Aggiugi</button>
        </div>
    </div>
</div>
<div>
    <ul>
        @for(nome of nomi(); track nome) {
            <li>{{nome}}</li>
        }
    </ul>
</div>
```
```typescript
export class Bindings {
  nomi: WritableSignal<string[]> = signal(['Andrea', 'Gianni', 'Federico', 'Luca']);
    
  aggiungiNome(nome: any): void {
    console.log(nome.value);
  }
}
```

# Lezione 05/11/2025
Viste iterazioni su array
E cose varie su bottoni, e metodi vari

# Lezione 10/11/2025
Ultima direttiva strutturale: @switch
Lo switch è una sorta di catena di if else, che però prende un caso, in base al valore, esegue un azione.
```html
@switch (valoreDaControllare()) {
    @case ('caso1') {
        <p>Questo è il caso 1</p>
    }
    @case ('caso2') {
        <p>Questo è il caso 2</p>
    }
    @default {
        <p>Questo è il caso di default</p>
    }
}
```


OOP -> utilizzo di classi
Creiamo un componente "classi"
```bash
ng generate component classi-interfacce
```

Creiamo una classe studente
```bash
ng generate class classi-interfacce/studente
```

Attributi
```typescript
private _nome: string;
private _cognome: string;
```
Costruttore
```typescript
constructor(nome: string, cognome: string) {
    this._nome = nome;
    this._cognome = cognome;
}
```
Getters e Setters
```typescript
public get nome(): string {
    return this._nome;
}
public set nome(value: string) {
    this._nome = value;
}
```



