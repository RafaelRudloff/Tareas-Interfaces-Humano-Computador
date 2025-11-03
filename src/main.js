import './style.css'

const productos = [
  { nombre: "Coca Cola", cantidad: 2, precio: 4000 },
  { nombre: "Six Pack Cerveza", cantidad: 3, precio: 17690 },
  { nombre: "Palta", cantidad: 3, precio: 5980 }
];

const lista = document.getElementById("lista-productos");
const totalDiv = document.getElementById("total");

function renderLista() {
  lista.innerHTML = productos
    .map(
      (p) => `
      <div class="producto">
        <span>${p.nombre} ×${p.cantidad}</span>
        <span>$${p.precio}</span>
      </div>`
    )
    .join("");

  const total = productos.reduce((acc, p) => acc + p.precio, 0);
  totalDiv.textContent = `Total: $${total}`;
}

renderLista();

const popup = document.getElementById("popup");
const btnPagar = document.querySelector(".btn-pagar");

btnPagar.addEventListener("click", () => {
  popup.innerHTML = `
    <div class="popup-content">
      <p>
        Exigencia ley 21.363 para la compra de bebidas alcohólicas <br>
        Presente su carnet de identidad en el lector QR
        <br>
        <img src="./public/carnet.png" width="200" alt="Carnet de identidad" style="display: block; margin: 18px auto 0 auto;" />
      </p>
      <button id="cerrarPopup">Cerrar</button>
    </div>
  `;
  popup.style.display = "flex";

  document.getElementById("cerrarPopup").addEventListener("click", () => {
    popup.style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target === popup) popup.style.display = "none";
});