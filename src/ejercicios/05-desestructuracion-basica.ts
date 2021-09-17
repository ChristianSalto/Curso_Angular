/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  año: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    año: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log("El valumen actual de: ", volumen);
// console.log("El segundo actual de: ", segundo);
// console.log("La cancion actual de: ", cancion);
// console.log("El autor es: ", autor);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, p2,p3] = dbz;

console.log("Personaje 2: ", p2);
console.log("Personaje 2: ", p3);
