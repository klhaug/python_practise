


//La oss teste kunnskapen om asynkron kode og event-loopen. 

// Synkrone oppgaver

console.log(1);


// Mikrooppgaver // F.eks. Promises, queuMicroTask, 
// This is some changes on the dev branch
//
async function asyncLogging(){
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		})
	});

	const res = await promise;
	console.log(res);

};


const promise = asyncLogging();
console.log(3);


// Makrooppgaver // F.eks. setTimeout, UI Events, setInterval, 
