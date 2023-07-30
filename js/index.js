const shopContenedor = document.getElementById("shopContenedor");
const verCarrito = document.getElementById("verCarrito");
const modalContenedor = document.getElementById("modalContenedor");

let carrito = [];

productos.forEach((producto) => {
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
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
    });
  });
});
