//foto de perfil e usuario logado//
let usuarioLogado = sessionStorage.getItem("usuarioLogado");
let imagemPerfil = sessionStorage.getItem("imagemPerfil");
if (usuarioLogado && imagemPerfil) {
  document.getElementById("perfil").innerHTML += `
                <button class="btn-header" id="btnmenu" onclick="irperfil()" ><img src="${imagemPerfil}" alt="Imagem de Perfil" class="imagem-perfil-header centralizar perfil-header  btn-header" id="foto-perfil"></button>
            `;
} else {
  window.location.href = "Index.html";
}

let menu = document.getElementById("menu");
function abrirmenu() {
  if (menu.style.display == "block"){
    menu.style.display = "none";
  }
  else {
    menu.style.display = "block";
  }
}
