//foto de perfil e usuario logado//
let senhaLogada = sessionStorage.getItem("senhaLogada")
let usuario = sessionStorage.getItem("usuario");
let senha = sessionStorage.getItem("senha");
let usuarioLogado = sessionStorage.getItem("usuarioLogado");
let imagemPerfil = sessionStorage.getItem("imagemPerfil");
let senhaantiga = document.getElementById("senhaantiga");
let senhanova = document.getElementById("senhanova");
let senhaconfirma = document.getElementById("senhaconfirma");
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
  if (usuarioLogado && imagemPerfil) {
    document.getElementById("perfil-foto").innerHTML = `<img src="${imagemPerfil}" alt="" id="perfil-foto-">`
    document.getElementById("perfil-nome").innerHTML = `<p>${usuarioLogado}<\p>`
    document.getElementById("perfil-senha").innerHTML = `<p>${senhaLogada}<\p>`
  }
}
function Salvarperfil() {
  if (senhaantiga == senhaLogada && senhanova == senhaconfirma){
    alert(`A senha foi alterada com sucesso`)
}
}
