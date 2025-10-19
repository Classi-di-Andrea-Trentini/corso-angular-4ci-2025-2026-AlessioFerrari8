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

        

# Lezione 15/10/2025
Build di un applicazione
```bash
cd nome-applicazione
ng build
```

Dopo averla buildata, copiamo il contenuto della cartella `dist/browser` nella cartella `app` che creiamo nel progetto e poi lanciamo con docker

```bash
docker run --name webserver -p 6000:80 -v /workspaces/corso-angular-4ci-2025-2026-AlessioFerrari8/app/:/usr/share/nginx/html nginx
```

Il -p serve per la porta --> 6000:80 tra host e container
Il -v serve per montare la directory iniziale (/workspaces/...) su quella dell'host

Sennò si può usare un server con il comando

```bash
    ng serve
```