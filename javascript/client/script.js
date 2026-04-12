import { asyncLogging, logMsg, timeout } from "./functions.js"


//La oss teste kunnskapen om asynkron kode og event-loopen. 

// Async gjør at en funksjon alltid retunerer er løfte. Det pakker inn alt i den funksjonen i et løfte
// Async gjør også at man kan bruke await, som gjør at resten av koden bare venter på at den har fullført
// Vanligvis kan man bare bruke await inni async funksjoner, men i moderne browsere kan man bruke "await" i top level i moduler, altså utenfor en funksjon.
//
// Await gjør også at noe legges til micro-queen. Await gjør også at gjennomføringen av koden sendes dit, uten at funksjonen poppes fra call-stacken. 


// Mikrooppgaver // F.eks. Promises, queuMicroTask, 
// This is some changes on the dev branch


// Makrooppgaver // F.eks. setTimeout, UI Events, setInterval, 


console.log(1);

asyncLogging(); //2

console.log(3);

setTimeout(logMsg, timeout); // 4

console.log(5)

asyncLogging(); //2


