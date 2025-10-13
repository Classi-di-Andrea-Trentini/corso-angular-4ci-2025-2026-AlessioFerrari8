[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20964327)

# lezione 08/10/2025

Web app -> esempio l'app del registro https://www.vivoscuola.it/Accedi-a
Perché si perferiscono web app?
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
    -g -> global mode
3. Installare npm
    ```bash
    npm install -g npm@11.6.2
    ```
4. Vediamo angular
    ```bash
    ng version
    ```

## Creare la prima app
1. Comando
    ```bash
    ng new nome-applicazione
    ```
> Quando usiamo la CLI di Angular, è consigliabile utilizzare tutti i nomi in minuscolo, senza spazi o caratteri speciali. Se un nome prevede due o più parole, si separano con trattini (-) -> KEBAB CASE

## Struttura applicazione
- .vscode: cartella nascosta usata da Visual Studio Code (**interesse zero**)
- node_modules: cartella sempre presente nei progetti Node.js, è gestita da npm, non contiene codice modificabile **(NON È NECESSARIO, ANZI FORTEMENTE SCORAGGIABILE PUSHARLA)**. In qualsiasi momento è possibile ricostruirla con il comando `npm install` (**interesse zero**)
- public: nella directory public vanno inseriti media (immagini, suoni, sfondi, filmati, ecc.) e veranno utilizzati nella web app
- src: 