/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
  return a + b;
}

const sumaArrow = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

// const resultado = multiplicar(5, 0, 10);

// console.log(resultado);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
}

const personajeMalo: PersonajeLOR = {
  nombre: "Belial el sanguinario",
  pv: 100,
  mostrarHP() {
    console.log("Tus puntos de vida -> " + this.pv);
  },
};

curar(personajeMalo, 20);


personajeMalo.mostrarHP()