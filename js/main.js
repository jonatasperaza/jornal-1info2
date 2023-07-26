//foto de perfil e usuario logado//
let usuario = sessionStorage.getItem("usuario");
let senha = sessionStorage.getItem("senha");
let usuarioLogado = sessionStorage.getItem("usuarioLogado");
let imagemPerfil = sessionStorage.getItem("imagemPerfil");
if (usuarioLogado && imagemPerfil) {
  document.getElementById("perfil").innerHTML += `
                <a href="perfil.html"><button class="btn-header" id="btnmenu" onclick="irperfil()" ><img src="${imagemPerfil}" alt="Imagem de Perfil" class="imagem-perfil-header centralizar perfil-header  btn-header" id="foto-perfil"></button><\a>
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
function ExibirPerfil() {

}
