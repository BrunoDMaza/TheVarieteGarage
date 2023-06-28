// Condicional
let precioBruto = prompt("Ingrese el precio bruto del producto");

let opcionCuota = parseInt(
  prompt("Elija en cuántas cuotas lo va a pagar (1, 3,6,9 y 12 cuotas)")
);

let precioIva = 0;

let precioTotal = 0;

function agregarIva() {
  precioIva = precioBruto * 1.21;
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

// Bucle

let nombreUsuario = prompt("Ingrese su nombre. Para salir escriba ESC");
while (nombreUsuario != "ESC") {
  alert("El nombre de usuario es " + nombreUsuario);
  nombreUsuario = prompt("Ingrese su nombre. Para salir escriba ESC");
}
