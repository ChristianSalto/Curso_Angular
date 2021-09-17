/*
    ===== Código de TypeScript =====
*/

// <T> -> por convencion asi se indican los genericos, 
// para que nos permita pasarle el dato que sea

function queTipoSoy<T>(argumentos: T) {
    return argumentos
}

let soyString = queTipoSoy('Soy un string');
let soyNumero = queTipoSoy(200);
let soyArray = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let soyObjeto = queTipoSoy({ s: 'hola mundo', n: 1000 });


let soyExplicito = queTipoSoy<number>(200)