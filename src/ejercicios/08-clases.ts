/*
    ===== Código de TypeScript =====
*/


// private -> La propiedad solo sera visible dentro de la clase
// public -> La propiedad sera visible detro y fuera de la clase
// static -> Se podra acceder al valor de la propiedad sin crear una instancia de la misma


class Humano {
    constructor(
        public nombre:string,
        public direccion:string
    ){

    }
}


class Heroe extends Humano{

  constructor(
    public raza: string,
    public edad: number,
    public nombre: string
  ) {
      super(nombre, 'New York - USA')
  }
}

const thor = new Heroe("Divina", 2000, "borr");

console.log(thor);
