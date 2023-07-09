function Producto(id, nombre, precioBruto, stock) {
  this.id = id;
  this.nombre = nombre;
  this.precioBruto = precioBruto;
  this.stock = stock;
}

const producto1 = new Producto(1, "Platos antiguos por docena", 2000, 3);
const producto2 = new Producto(2, "Mecedora", 15000, 5);
const producto3 = new Producto(3, "Jarrón", 7000, 2);
const producto4 = new Producto(4, "Winco", 28000, 1);
const producto5 = new Producto(5, "Señal ferroviaria", 10000, 7);

const arrayProductos = [producto1, producto2, producto3, producto4, producto5];

console.log(arrayProductos);

for (let i = 0; i < arrayProductos.length; i++) {
  console.log(
    "Estos son los productos disponibles: Número " +
      i +
      " " +
      arrayProductos[i].nombre
  );
}

let seleccion = prompt("Elija un producto (1-" + arrayProductos.length + "):");

let productoSeleccionado = arrayProductos[seleccion - 1];

console.log("El producto seleccionado es: " + productoSeleccionado.nombre);
console.log(
  "El precio bruto del producto es " + productoSeleccionado.precioBruto
);

// // Condicional
// let precioBruto = prompt("Ingrese el precio bruto del producto");

let opcionCuota = parseInt(
  prompt("Elija en cuántas cuotas lo va a pagar (1, 3,6,9 y 12 cuotas)")
);

let precioIva = 0;

let precioTotal = 0;

function agregarIva() {
  precioIva = productoSeleccionado.precioBruto * 1.21;
  console.log("El precio con iva es " + precioIva);
}
agregarIva();

switch (opcionCuota) {
  case 3:
    precioTotal = precioIva + precioIva * 0.3;
    precioPorCuota = precioTotal / opcionCuota;
    precioTotal = precioTotal.toFixed(2);
    precioPorCuota = precioPorCuota.toFixed(2);
    alert(
      "El precio total en 3 cuotas es: " +
        precioTotal +
        "y cada cuotas es de: " +
        precioPorCuota
    );
    break;
  case 6:
    precioTotal = precioIva + precioIva * 0.6;
    precioPorCuota = precioTotal / opcionCuota;
    precioTotal = precioTotal.toFixed(2);
    precioPorCuota = precioPorCuota.toFixed(2);
    alert(
      "El precio total en 6 cuotas es: " +
        precioTotal +
        "y cada cuotas es de: " +
        precioPorCuota
    );
    break;
  case 9:
    precioTotal = precioIva + precioIva * 0.9;
    precioPorCuota = precioTotal / opcionCuota;
    precioTotal = precioTotal.toFixed(2);
    precioPorCuota = precioPorCuota.toFixed(2);
    alert(
      "El precio total en 9 cuotas es: " +
        precioTotal +
        "y cada cuotas es de: " +
        precioPorCuota
    );
    break;
  case 12:
    precioTotal = precioIva + precioIva * 1.2;
    precioPorCuota = precioTotal / opcionCuota;
    precioTotal = precioTotal.toFixed(2);
    precioPorCuota = precioPorCuota.toFixed(2);
    alert(
      "El precio total en 12 cuotas es: " +
        precioTotal +
        "y cada cuotas es de: " +
        precioPorCuota
    );
    break;
  case 1:
    precioTotal = precioIva;
    precioTotal = precioTotal.toFixed(2);
    alert("El precio total es: " + precioIva);
    break;

  default:
    alert("No ingresó una opción correcta");
    break;
}

// // Bucle

// let nombreUsuario = prompt("Ingrese su nombre. Para salir escriba ESC");
// while (nombreUsuario != "ESC") {
//   alert("El nombre de usuario es " + nombreUsuario);
//   nombreUsuario = prompt("Ingrese su nombre. Para salir escriba ESC");
// }
