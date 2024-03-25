Introduction to VUE

    VUE è un framewrok di Javascript, quindi tutto ciò che fa, è costruito
sulle logiche Java e sarebbe ripetibili partendo da Java puro, ma l'utilizzo
del framework ci rende molto facile ed intuitivo la gestione delle
interfacce e sviluppare le varie interazioni tra i file HTML, CSS e JS.
    Si tratta di un framework progressivo, nel senso che nell'ambito 
del frontend development, è applicabile alle situazioni più svariate
che siano molto semplici o complesse. 
    Un file Vue SFC incapsula tutte le 3 parti di cui sopra in un solo file.
Questo accade quando si utilizzano i tools di VUE, che semplificano
ancora di più la compilazione.
    Vue può ewssere scritto secondo la logica Options API, quindi utilizzando
oggetti e opzioni, ed è centrata attorno al concetto di intanza di componente.
Perfetta quindi per un modello di programmazione basato sulle classi (modelli)
per poi creare instanze.
    La composition API invece definiscono le propprietà e la logica dei componenti
attraverso le funzioni API importate e le dichiarazioni di stato vengono fatte
direttamente nello scope delle stesse 
(non mi è chiarissimo questo concetto)

Template Syntax

    Vue utilizza una sua sintassi per semplificare i collegamenti tra gli
elementi del DOM e i dati del componente che si aggiornano ad ogni interazione.
    La sintassi a baffo utilizza ciò che sta all'interno delle doppie graffe
come plain text e si aggiorna in tempo reale con le proprietà del testo inserito.
All'interno delle graffe possiamo anche inserire vere e proprie espressioni in Java.
    Per modificare gli attributi dei componenti del DOM, VUE utilizza le direttive,
jattributi speciali che iniziano con v- (come v-html e v-bind). Il loro lavoro è
quello di aggiornare il DOM ogni volta che il valore della loro espressione cambia.
    Diversi attributi accettano degli "arguments" speciali che indicano alla direttiva
l'espressione da collegare all'attributo (generalmente preceduto da :, ma ci sono anche
versioni abbreviate come v-bind: diventa :,  v-on: diventa @ ecc.).
    L'argument può essere dinamico se contonato da [] andrà ad indicare che il suo
valore è dato da un'espressione Java (che deve comunque ritornare una stringa).
    Seguiti da . i modifiers vanno invece a legare in maniera speciae e quindi modificano
il conmportamento della direttiva.