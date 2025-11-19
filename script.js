//##NUMEROS
//EJERCICIO 1
function suma(a, b) {
    return "La suma es: " + (a + b);
}   
console.log(suma(3, 5)); // 8

//EJERCICIO 2
function resta(a, b) {
    return "La resta es: " + (a - b);
}
console.log(resta(10, 5)); // 5

//EJERCICIO 3
function multiplica(a, b) {
    return "La multiplicación es: " + (a * b);
}
console.log(multiplica(3, 5)); // 15

//EJERCICIO 4
function divide(a, b) {
    return "La división es: "+ (a / b);
}
console.log(divide(15, 3)); // 5

//EJERCICIO 5
function exponente(a, b) {
    return "El exponencial es: "+ (a ** b);
}
console.log(exponente(2, 3)); // 8



function modulo(a, b) {
    return "El modulo es: " + (a % b);

}
console.log(modulo(10, 3)); // 1

//EJERCICIO 7
function raizCuadrada(a) {
    return "La raiz cuadrada es: " +(Math.sqrt(a));
}
console.log(raizCuadrada(16)); // 4

//EJERCICIO 8
function valorAbsoluto(a) {
    return "El valor absoluto es: "+ (Math.abs(a));
}
console.log(valorAbsoluto(-10)); // 10

//EJERCICIO 9
function redondear(a) {
    return "Redondeamos a: " + (Math.round(a));
} 
console.log(redondear(4.6)); // 5

//EJERCICIO 10
function aleatorio() {
    return "El aleatorio entre 0 y 1 es: " + (Math.random());
}
console.log(aleatorio()); 


//##LETRAS
//EJERCICIO 1
function concatenar(str1, str2) {
    return "La concatenación es: " + (str1 + str2);
}
console.log(concatenar("Hola ", "mundo!")); // "Hola mundo!"

//EJERCICIO 2
function longitudCadena(str) {
    return "La longitud de la cadena es de: " + str.length;
}
console.log(longitudCadena("Hola")); // 4

//EJERCICIO 3
function convertirMayusculas(str) {
    return "La frase en mayusculas: " + str.toUpperCase();
}
console.log(convertirMayusculas("hola")); // "HOLA"

//EJERCICIO 4
function convertirMinusculas(str) {
    return "La frase en minúsculas: " + str.toLowerCase();
}
console.log(convertirMinusculas("HOLA")); // "hola"

//EJERCICIO 5
function obtenerCaracter(str, index) {
    return "Obtenemos la letra: " + str.charAt(index);
}
console.log(obtenerCaracter("Hola", 1)); // "o"

//EJERCICIO 6
function reversedCadena(str) {
    return "La frase al revés es: " + str.split('').reverse().join('');
}
console.log(reversedCadena("Hola")); // "aloH"

//EJERCICIO 7
function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return "El número de letras que hay en este string es de :" + count;
}
console.log(countCharacter("Hola mundo", "o")); // 2


//EJERCICIO 8
function sinEspacios(str) {
    return "La frase sin espacios: " + str.replace(/\s+/g, '');
}
console.log(sinEspacios("Hola mundo")); // "Holamundo"

//EJERCICIO 9
function esPalindromo(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false

//EJERCICIO 10
function primeraLetraMayuscula(str) {
    return "La string con la primera en mayúscula es: " + str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(primeraLetraMayuscula("hola mundo")); // "Hola mundo"


//##ARRAYS
//EJERCICIO 1
function sumarElementos(arr) {
    return "La suma de los elementos del array es de: " + arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumarElementos([1, 2, 3, 4, 5])); // 15

//EJERCICIO 2
function promedioElementos(arr) {
    const suma = arr.reduce((acc, curr) => acc + curr, 0);
    return "El promedio de los elementos del array es de: " + suma / arr.length;
} 
console.log(promedioElementos([1, 2, 3, 4, 5])); // 3

//EJERCICIO 3
function ordenarAscendente(arr) {
    return "El array por orden ascendente es de: " + arr.slice().sort((a, b) => a - b);
}
console.log(ordenarAscendente([5, 2, 8, 1, 4])); // [1, 2, 4, 5, 8]

//EJERCICIO 4
function filtrarMayores(arr, num) {
    return "Filtración de elementos mayores del array: " + arr.filter(element => element > num);
}
console.log(filtrarMayores([1, 5, 8, 10, 3], 4)); // [5, 8, 10]

//EJERCICIO 5
function mezclarArrays(arr1, arr2) {
    return "Mezcla de los arrays: " + arr1.concat(arr2);
}
console.log(mezclarArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

//EJERCICIO 6
function numeroMaximo(arr) {
    return "Numero máximo: " + Math.max(...arr);
}
console.log(numeroMaximo([1, 5, 8, 10, 3])); // 10

//EJERCICIO 7
function numeroMinimo(arr) {
    return "Numero mínimo: " + Math.min(...arr);
}
console.log(numeroMinimo([1, 5, 8, 10, 3])); // 1

//EJERCICIO 8
function contadorElementos(arr,elemento) {
    let contador = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            contador++;
        }
    }

    return "numero de veces elemento repetido: " + contador;
}
console.log(contadorElementos([1, 2, 3, 2, 4, 2], 2)); // 3
console.log(contadorElementos(["a", "b", "a", "c"], "a")); // 2

//EJERCICIO 9
function suprimirDuplicados(arr) {
    return "suprimir duplicados: " + [...new Set(arr)];
}
console.log(suprimirDuplicados([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

//EJERCICIO 10
function invertirArray(arr) {
    return "Invertir array: " + arr.slice().reverse();
}
console.log(invertirArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(invertirArray(["Hola","mundo"])); // ["mundo", "Hola"]


//##OBJETOS LITERALES
//EJERCICIO 1
function obtenerNombre(obj) {
    return "Nombre: " + obj.nombre;
}

const persona = { 
    nombre: "Carlos", 
    edad: 30 
};

console.log(obtenerNombre(persona)); // "Carlos"


//EJERCICIO 2
function establecerEdad(obj, edad) {
    obj.edad = edad;
    return obj;
}

const persona2 = { 
    nombre: "Ana", 
    edad: 25 
};

console.log(establecerEdad(persona2, 28)); // { nombre: "Ana", edad: 28 }


//EJERCICIO 3
function agregarPropiedad(obj, nombrePropiedad) {
    obj[nombrePropiedad] = null;
    return obj;
}

const persona1 = { nombre: "Jenny" };

agregarPropiedad(persona1, "apellido");
console.log(persona1);  // Resultado: { nombre: "Jenny", apellido: null }



//EJERCICIO 4
function eliminarPropiedad(obj, nombrePropiedad) {
    delete obj[nombrePropiedad];
    return obj;
}
const persona3 = { nombre: "Jenny", edad: 41, ciudad: "Barcelona" };
eliminarPropiedad(persona3, "ciudad");
console.log(persona3); // { nombre: "Jenny", edad: 41 }


//EJERCICIO 5
function listarPropiedades(obj) {
    return Object.keys(obj).length;
}
const persona4 = { nombre: "Jenny", edad: 41, ciudad: "Barna" };
console.log(listarPropiedades(persona4)); //3

//EJERCICIO 6
function existePropiedad(obj, nombrePropiedad) {
    return obj.hasOwnProperty(nombrePropiedad);
}
const persona5 = { nombre: "Jenny", edad: 41 };
console.log(existePropiedad(persona5, "edad")); // true
console.log(existePropiedad(persona5, "ciudad")); // false

//EJERCICIO 7
function obtenerValores(obj) {
    return Object.values(obj);
}

const persona6 = {
    nombre: "Jenny",
    edad: 41,
    ciudad: "Barna"
};

console.log(obtenerValores(persona6));

//EJERCICIO 8
function mismasPropiedades(obj1, obj2) {
    const props1 = Object.keys(obj1);
    const props2 = Object.keys(obj2);
    if (props1.length !== props2.length) {
        return false;
    }
    for (let prop of props1) {
        if (!props2.includes(prop)) {
            return false;
        }
    }
    return true;
}
const objA = { a: 1, b: 2, c: 3 };
const objB = { a: 4, b: 5, c: 6 };
const objC = { a: 7, b: 8, d: 9 };
console.log(mismasPropiedades(objA, objB)); // true
console.log(mismasPropiedades(objA, objC)); // false


//EJERCICIO 9
function copiarObjeto(obj) {
    return { ...obj };
}
const persona7 = { nombre: "Jenny", edad: 41 };
const copiaPersona = copiarObjeto(persona7);
console.log(copiaPersona); // { nombre: "Jenny", edad: 41 }


//EJERCICIO 10
function fusionarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const obj1 = { nombre: "Jenny", apellido:"Cros" };
const obj2 = { nombre: "Maria", edad: 41 };
const objetoFusionado = fusionarObjetos(obj1, obj2);
console.log(objetoFusionado); // { nombre: "Maria", apellido: "Cros", edad: 41 }