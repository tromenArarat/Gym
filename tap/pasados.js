/*
Output
A single line with an integer indicating 
the smallest possible difference between 
the amount of paint received by the person 
who receives the most paint, and the amount 
received by the person who receives the least.

Examples input
2       The first line contains the number of friends.
1 2     The second line contains the amount of paint in each of the N
        cans of red paint.
1 2     Finally, the third line contains the amount of paint in each of the N
        cans of blue paint.
*/
let input = [5, 5, 5, 5]

function progresiones(entrada) {
    let conteniendo = entrada[0];
    let suma = entrada[1];
    let inicio = entrada[2];
    let fin = entrada[3];
    let n = fin-inicio+1;
    let elementos = new Array(n);
    for (let j = 0; j < n; j++) {
        elementos[j] = inicio + j;
    }
    let resultado = [];
    let temporal = [];

    function esProgresionValida(arr) {
        if (arr.length == 1) return true; // Un solo elemento o un elemento vacío es una progresión válida
        const dif = arr[1] - arr[0]; // Calculcula la diferencia
        function recursive(indice) {
            if (indice >= arr.length - 1) return true; // Caso base, llega al final del array sin casos falsos
            if (arr[indice + 1] - arr[indice] !== dif) return false; // Si la dif no es la misma da falso
            return recursive(index + 1); // Llamada recursiva, chequea el siguiente elemento
        }
        return recursive(1); // Empieza la recursión desde el segundo elemento
    }

    function recursiva(elementos, i) {
        if (i === elementos.length) {  
            
            let tempSuma = temporal.reduce((a,b)=>a+b,0);  
            if(tempSuma===suma&&
                temporal.includes(conteniendo)&&
                    esProgresionValida(temporal)){
                        resultado.push([...temporal]);
                        
            }
            
            return;
        }

        temporal.push(elementos[i]);
        // console.log("push "+temporal)
        recursiva(elementos, i + 1);

        temporal.pop();
        // console.log("pop "+temporal)
        recursiva(elementos, i + 1);
    }
    recursiva(elementos, 0);
    return resultado.length;
}
let eso = progresiones(input);
console.log(eso);

/*
function progresiones(entrada) {
    let conteniendo = entrada[0];
    let suma = entrada[1];
    let inicio = entrada[2];
    let fin = entrada[3];
    let resultado = 0;
        function recursiva(contador,temp,result){
            let tempSuma = temp.reduce((a,b)=>a+b);
            if(contador>fin+1){
                return result;
            }else{
                for(let j=contador;j<fin+1;j++){
                    if(conteniendo!=j){
                        if(tempSuma==suma){
                            result=result+tempSuma;
                            temp = [conteniendo]
                            recursiva(j,temp,result)
                        }else{
                            if(!temp.includes(j)){
                                if(tempSuma<suma){
                                    temp.push(j);
                                    recursiva(j+1,temp,result)
                                }
                                if(tempSuma>suma){
                                    temp.pop(j)
                                    recursiva(j+1,temp,result)
                                }
                            }
                        }
                    }
                }
            }
        }
    
    return resultado+recursiva(inicio,[conteniendo],0)
}

console.log(progresiones(input))
*/
/*

function combinaciones(elementos) {

    //  Inicializa dos vectores: "resultado" y "temporal". 
    //  resultado almacena todas las combinaciones de elementos posibles sin repeticiones
    //  y sin importar el orden, empezando en vacío,
    //  temporal almacenará cada subconjunto construido.
    let resultado = [];
    let temporal = [];

    //  La función recursiva es definida dentro del conjunto. 
    //  Esta función toma dos argumentos: elementos (el vector ingresado) 
    //  e i (un índice que realiza un seguimiento sobre el elemento actual).
    function recursiva(elementos, i) {

        // Caso base: cuando i toma el valor de la longitud del vector
        // significa que ya recorrimos todos los elementos.
        // En este punto, insertamos una copia del vector temporal en resultado.
        // Así aseguramos no enviar una referencia a temporal, y 
        // preservamos las combinaciones encontradas.
        if (i === elementos.length) {
            return resultado.push([...temporal]);
        }

        // temp.push(elementos[i]) es llamado para agregar el elemento actual 
        // en el índice i al vector temporal, incluyéndolo como la combinación actual. 
        temporal.push(elementos[i]);

        // recursiva(nums, i + 1); es llamado para generar recursivamente 
        // subconjuntos incluyendo el elemento actual en el índice i.        
        recursiva(elementos, i + 1);

        // temp.pop();remueve el último elemento agregado al vector temp, 
        // excluyéndolo de la combinación actual.        
        temporal.pop();

        recursiva(elementos, i + 1);
    }
    recursiva(elementos, 0);
    return resultado;
}
let combinetas = combinaciones(["1","2","3"]);
console.log(combinetas);


function progresiones(entrada) {
    let conteniendo = entrada[0];
    let suma = entrada[1];
    let inicio = entrada[2];
    let fin = entrada[3];
    function recursive(i, c, t, r) {
        let inicio = i;
        let contador = c;
        if (c > fin) {
            return;
        } else {
            t.push(c)
            let sumaTemp = t.reduce((a, x) => {
                return a + x;
              }, 0);
            if (sumaTemp == suma) {
                if (t.includes(conteniendo)){
                    r.push(t)
                    t = []
                    c = i
                    console.log(r)
                    recursive(i+1, c, t, r)
                } else {
                    t = []
                    recursive(i,c+1, t, r)
                }   
            } 
            if (sumaTemp < suma) {
                recursive(i,c+1, t, r)
            }
            if (sumaTemp > suma) {
                t.pop()
                recursive(i,c+1, t, r)
            }
        }
        return r.length;
    }
    return recursive(inicio,inicio,[],[]);
}

console.log(progresiones(input))
*/
/*
let input = [5, 15, 1, 10]

function progresiones(entrada){
    let contenido = entrada[0];
    let suma = entrada[1];
    let inicio = entrada[2];
    let fin = entrada[3];
    let temp=[];
    let resultado = [];
    
    for(let i=inicio;i<fin+1;i++){
        temp.push(i);
        console.log(temp);
        function recursiva(j){
            if(j==fin+1){
                return;
            }else{
                let sumaTemp = temp.reduce((acumulador, valorActual) => {
                    return acumulador + valorActual;
                  }, 0); 
                if(sumaTemp==suma){
                    return resultado.push(temp);
                }else{
                    temp.push(j);
                    if(sumaTemp==suma){
                        resultado.push(temp);
                    }
                    if(sumaTemp>suma){
                        temp.pop(j);
                        recursiva(i+1)
                    }
                    if(sumaTemp<suma){
                        recursiva(i+1)
                    }
                }
            }
        }
    }
    return resultado.length;
}

console.log(progresiones(input));
*/
/*
let entrada = ["BNBNB","BBNNN","NNNNN","BNNNN","NNBNN"];

function domino(input){
    let temp=0;
    let result=0;
    for(let i=0;i<input.length;i++){
        for(let j=0;j<input.length;j++){
            if(input[i].charAt(j)=="N"){
                temp=temp+1;
                if(temp==2){
                    result=result+1;
                    console.log(result)
                    temp=0;
                }
            }else{
                temp=0;
            }
        }
        temp=0;
    }
    return result;
}
console.log(domino(entrada));
*/
/*
let a = [140, 79, 5];
let s = [90, 42, 5];

let r = [120, 456, 7458, 84, 123, 84, 213, 185, 987, 654];
let f = [97, 73, 61, 41, 52, 23, 11, 7]

function glucosa(alfajores, smiths) {
    let resto = [];
    for (let i = 0; i < alfajores.length; i++) { 
        let caja = alfajores[i];
        function recursive(j) {
            if(j===smiths.length){
                resto.push(caja);
                return;
            }else{
                if (caja === 0) {
                    resto.push(caja);
                } else if (smiths[j] > caja) {
                    return recursive(j + 1);
                } else if(smiths[j] <= caja){
                    caja = caja - smiths[j];
                    return recursive(j);
                }
            }
        }
        recursive(0);
    }
    return resto;
}

console.log(glucosa(r,f));
*/