const container = document.querySelector("#itemsContain");
const productBtn = document.querySelector("#btnContainer");
const title = document.querySelector("#titleProduct");

productBtn.addEventListener("click", obtenerDatos);

function obtenerDatos(e) {
  const url = "assets/js/products.json";
  let buttonId = parseInt(e.target.getAttribute("data-id"));

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarDatos(resultado, buttonId));
}

function cloneItem() {
  const clone = container.children[0].cloneNode(true);
  container.appendChild(clone);
}

function mostrarDatos(items, btnId) {
  const { name, products } = items[btnId];
  const length = products.length;

  title.innerText = name;

  switch (length) {
    case 4:
      if (container.children.length === 5) {
        container.lastChild.remove();
      } else if (container.children.length > 5) {
        container.lastChild.remove();
        container.lastChild.remove();
      }

      for (let i = 0; i < container.children.length; i++) {
        // Image items
        container.children[i].children[0].children[0].children[0].src =
          products[i][0];
        // Title items
        container.children[i].children[0].children[1].children[0].innerText =
          products[i][1];
        // Info items
        container.children[i].children[0].children[1].children[1].innerText =
          products[i][2];
      }
      break;

    case 5:
      if (container.children.length === 4) {
        cloneItem();
      } else if (container.children.length > 4) {
        container.lastChild.remove();
      }

      for (let i = 0; i < container.children.length; i++) {
        // Image items
        container.children[i].children[0].children[0].children[0].src =
          products[i][0];
        // Title items
        container.children[i].children[0].children[1].children[0].innerText =
          products[i][1];
        // Info items
        container.children[i].children[0].children[1].children[1].innerText =
          products[i][2];
      }
      break;
    case 6:
      for (let c = 0; c < 2; c++) {
        cloneItem();
      }

      if (container.children.length >= 7) {
        container.lastChild.remove();
      }

      for (let i = 0; i < container.children.length; i++) {
        // Image items
        container.children[i].children[0].children[0].children[0].src =
          products[i][0];
        // Title items
        container.children[i].children[0].children[1].children[0].innerText =
          products[i][1];
        // Info items
        container.children[i].children[0].children[1].children[1].innerText =
          products[i][2];
      }
      break;
  }
}
