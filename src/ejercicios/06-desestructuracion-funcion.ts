/*
    ===== Código de TypeScript =====
*/

export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tablet: Producto = {
  desc: "iPad Air",
  precio: 350,
};

export const calculaISV = (productos: Producto[]) => {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
};

const articulos = [telefono, tablet];

const [total, isv] = calculaISV(articulos);

console.log("Total: ", total);
console.log("ISV: ", isv);
