const body = document.getElementById("body");

const promise = fetch('http://127.0.0.1:3000')
const res = await promise;
const data = await res.json()

const newDiv = document.createElement("div");
const newContent = document.createTextNode(data);

newDiv.appendChild(newContent)

setTimeout(() => {

body.append(newDiv)
}, 3000)

