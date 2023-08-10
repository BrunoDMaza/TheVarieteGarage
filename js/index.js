const shopContenedor = document.getElementById("shopContenedor");
const verCarrito = document.getElementById("verCarrito");
const modalContenedor = document.getElementById("modalContenedor");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const traerProductos = async () => {
  const respuesta = await fetch("data.json");
  const datos = await respuesta.json();
  datos.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.className = "card";
    contenedor.innerHTML = `
      <img scr="${producto.img}">
      <h3>${producto.nombre}</h3>
      <p class = "precio" >$ ${producto.precio}</p>
      `;

    shopContenedor.append(contenedor);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    contenedor.append(comprar);

    comprar.addEventListener("click", () => {
      const repetido = carrito.some(
        (productoRepetido) => productoRepetido.id === producto.id
      );
      if (repetido) {
        carrito.map((prod) => {
          if (prod.id === producto.id) {
            prod.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          cantidad: producto.cantidad,
        });
        guardarLocal();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Se agregó el prducto al carrito",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  });
};

traerProductos();

const guardarLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};
