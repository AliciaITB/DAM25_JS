//EJERICICO 1
sumarPares([2,4,5,6,7,8,3,1,10,4])
function sumarPares(numeros){
    let totalPares = numeros.reduce((total,numero)=>(numero%2==0)?(total+numero):total);
    console.log(totalPares);
}

//Ejericicio 2
ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara'])// → Clara,Rodriguez,8,9,5,4,6.5 
function ordenDatos(array){
    array.sort();
    console.log(array);
}



function filterWords(palabras){
    console.log(palabras.filter(palabra => palabra[0]!='Z'));
}

//Ejercicio 3
filterWords(["Bob", "Alex", "Zoello"]);
filterWords(["León", "Zebra", "Gacela"]);
filterWords(["Mercedes", "Bmw", "Audi", "Porche"]);