/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
     nombre: string,
     hijos?: string[]
}

const ps1: Pasajero = {
    nombre: 'Carlos'
}

const ps2: Pasajero = {
    nombre: 'Keko',
    hijos: ['Jhon','Lisa']
}


function imprimirHijos(ps:Pasajero):void{
    const cunatosHijos = ps.hijos?.length || 0;

    console.log(cunatosHijos)
}

imprimirHijos(ps1)