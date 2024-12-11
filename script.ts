/* 1. Che cos'è TypeScript?

TypeScript è un linguaggio di programmazione open-source sviluppato da Microsoft. È un superset di JavaScript, il che significa che include tutte le funzionalità di JavaScript aggiungendo nuove caratteristiche come un sistema di typing.

Utilizzi di TypeScript:

Riduzione degli errori comuni durante la compilazione.

Ideale per progetti complessi e su larga scala.

Miglioramento della leggibilità e della manutenzione del codice.

Differenze con JavaScript:

TypeScript ha un sistema di typing statico, mentre JavaScript è dinamico.

TypeScript compila il codice prima dell'esecuzione, mentre JavaScript viene eseguito direttamente.

Supporta funzionalità più moderne come Generics, interfaces e decorators */

/////////////////////

/* 2. Il compilatore di TypeScript

Perché è necessario?

TypeScript non viene eseguito direttamente dai browser. Deve essere prima tradotto in JavaScript per poter essere eseguito nei vari ambienti.

Come si usa?

Installazione di TypeScript tramite npm:
npm install -g typescript

Compilazione di un file TypeScript in JavaScript:
tsc file.ts */

/////////////////////////////////////////////////////////////////////////

/* 3. Type Inference (Inferenza di tipo)

TypeScript può dedurre automaticamente il tipo di variabili in base al loro valore iniziale. */

//esempio:
let age = 25; // TypeScript deduce automaticamente che il tipo di 'age' è number.
age = "25"; // Errore: non è possibile assegnare un valore string a una variabile di tipo number.

//////////////////////////////

/* 4. Il tipo any

Il tipo any consente di assegnare qualsiasi tipo di dato a una variabile. È utile quando il tipo non è noto in anticipo.

Esempio: */
let data: any = 42;
data = "Hello, world!"; // Nessun problema.
////////////////////////////////////////////////

/* 5. Tipo Union

Il tipo Union consente a una variabile di avere più tipi di dato.

Esempio: */
let id: string | number;
id = 101; // Valido
id = "A123"; // Valido
id = true; // Errore

/////////////

/* 6. Interfaces in TypeScript

Le interface vengono utilizzate per definire la struttura di un oggetto. Questa caratteristica migliora la leggibilità e la manutenibilità del codice.

Esempio: */
interface User {
  id: number;
  name: string;
  isActive: boolean;
}

let user: User = {
  id: 1,
  name: "Ali",
  isActive: true
};

////////////////////
/* 7. Generics

I Generics consentono di scrivere codice flessibile e riutilizzabile. Con i Generics, i tipi possono essere determinati dinamicamente.

Esempio:
 */

function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);
let str = identity<string>("Hello");
