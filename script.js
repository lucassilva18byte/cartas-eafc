function abrirPack() {
  const pack = document.getElementById("pack");
  const carta = document.getElementById("carta");
  const glow = document.getElementById("glow");

  // impedir clique duplo
  pack.onclick = null;

  // animação do pack
  pack.classList.add("open");

  // flash
  document.body.classList.add("flash");
  setTimeout(() => {
    document.body.classList.remove("flash");
  }, 200);

  // depois que o pack "abre"
  setTimeout(() => {
    pack.style.display = "none";

    carta.classList.remove("hidden");

    // glow aparece antes
    glow.classList.add("show");

    setTimeout(() => {
      carta.classList.add("show");

      // marca como carta rara (pode tirar se quiser)
      carta.classList.add("rara");

    }, 300);

  }, 700);
}