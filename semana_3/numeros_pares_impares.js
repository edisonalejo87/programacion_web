const numerop = [3,10,15,17,19,20,35,40,77,89];
const pares = [];
const impares = [];
for (let i = 0; i < numerop.length; i++) {
    console.log(numerop[i])
    if (numerop[i] % 2 === 0) {
        pares.push(numerop[i]);
    } else {
        impares.push(numerop[i]);
    }       
}
console.log(pares);
console.log(impares);







