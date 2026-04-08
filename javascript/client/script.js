#!/usr/bin/env node

//node --watch YOURFILEHERE

// Async foran en funksjon gjør at den funksjonen alltid returnerer et løfte. 
// Så hvis jeg lager en async funksjon, og ikke avventer den, logges det et løfte. 
// Men hvis jeg avventer den stopper all kode opp som kommer etter den og venter på at den skal resolves
//
// const promise = await fetch('http://127.0.0.1:3000/')
// const response = await promise
// console.log(response)

// ?? Hvordan gjør jeg error-håndterign i promiser? 
async function asyncGreeting(msg){
	return new Promise((resolve, reject) => {
		if(msg.length > 10) {
			setTimeout(() => {
				resolve(`Message is long enough: ${msg}`)
			}, 5000)
		} else {
			reject("Message too short")
		}
	})
}
;



const greeting = await asyncGreeting(" This is a large line so that the async fucktion will resolve bastard")
// alert(greeting)
//
setTimeout(() => console.log("1"), 2000)
setTimeout(() => console.log("2"), 1000)
setTimeout(() => console.log("3"), 0)

function withCallback(msg, callback) {
console.log(msg)
if(count > 5) callback()
}

function callBack(){console.log("Im the callback")}

let count = 0

const intervalId = setInterval(() => {
	if(count >= 10){
		clearInterval(intervalId)
	}
	console.log(count);
	count++
	withCallback("This is the first message", callBack)
}, 300)

if(count >= 10){ clearInterval(intervalId)}



//timedGreeting("Im timed");

console.log("This is just a log")

console.log(greeting);


