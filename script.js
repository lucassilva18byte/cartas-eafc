function abrirPack() {
  const pack = document.getElementById("pack");
  const carta = document.getElementById("carta");

  // animação do pack
  pack.classList.add("open");

  // flash estilo FIFA
  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 200);

  // depois de abrir
  setTimeout(() => {
    pack.style.display = "none";

    carta.classList.remove("hidden");

    setTimeout(() => {
      carta.classList.add("show");
    }, 100);

  }, 600);
}