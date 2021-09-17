/*
    ===== Código de TypeScript =====
*/

let skill : string[] = ['fly','strength','swiftness'];


interface Personaje {
    name: string;
    hp: number,
    skill:string[];
    origin?:string;
}

const personaje: Personaje = {
    name: 'belial',
    hp: 100,
    skill: ['fly','strength','swiftness']
}

personaje.origin = 'Rivendell';


console.table( personaje )