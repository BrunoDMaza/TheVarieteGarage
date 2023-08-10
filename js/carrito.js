const pintarCarrito = () => {
  modalContenedor.innerHTML = "";
  modalContenedor.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modalHeader";
  modalHeader.innerHTML = `
    <h1 class = "modalHeaderTitulo"> Carrito </h1>
    `;
  modalContenedor.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText = "X";
  modalButton.className = "modalButton";

  modalButton.addEventListener("click", () => {
    modalContenedor.style.display = "none";
  });

  modalHeader.append(modalButton);

  carrito.forEach((producto) => {
    let carritoContenedor = document.createElement("div");
    carritoContenedor.className = "carritoContenedor";
    carritoContenedor.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>$ ${producto.precio}</p>
      <p> Cantidad ${producto.cantidad}</p>
      <p> Total ${producto.cantidad * producto.precio}</p>
      `;
    modalContenedor.append(carritoContenedor);

    let eliminar = document.createElement("span");
    eliminar.innerText = "✖️";
    eliminar.className = "eliminarProducto";
    carritoContenedor.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalCompra = document.createElement("div");
  totalCompra.className = "totalContenedor";
  totalCompra.innerHTML = ` Total a pagar: $ ${total}`;

  modalContenedor.append(totalCompra);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
  const encontrarId = carrito.find((elemento) => elemento.id);
  carrito = carrito.filter((carritoId) => {
    return carritoId !== encontrarId;
  });
  guardarLocal();
  pintarCarrito();
};
