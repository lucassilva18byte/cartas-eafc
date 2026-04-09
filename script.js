function abrirCarta() {
  const carta = document.getElementById("carta");

  // reset
  carta.classList.remove("show");
  carta.classList.add("hidden");

  // flash tipo FIFA
  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 200);

  // suspense
  setTimeout(() => {
    carta.classList.remove("hidden");

    setTimeout(() => {
      carta.classList.add("show");
    }, 100);

  }, 800);
}