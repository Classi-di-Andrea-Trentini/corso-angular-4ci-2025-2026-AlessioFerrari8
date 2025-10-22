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
