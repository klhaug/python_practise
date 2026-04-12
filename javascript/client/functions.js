
export async function asyncLogging(){
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		},3000)
	});

	const res = await promise;
	console.log(res);

};


export function logMsg(){
	console.log(4)
}

export const timeout = 2000;
