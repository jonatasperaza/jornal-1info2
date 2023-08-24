let senhaLogada = sessionStorage.getItem("senhaLogada");
let usuarioLogado = sessionStorage.getItem("usuarioLogado");
let imagemPerfil = sessionStorage.getItem("imagemPerfil");

if (usuarioLogado && imagemPerfil) {
    document.getElementById("perfil").innerHTML += `
        <a href="perfil.html"><button class="btn-header" id="btnmenu" onclick="irperfil()"><img src="${imagemPerfil}" alt="Imagem de Perfil" class="imagem-perfil-header centralizar perfil-header btn-header" id="foto-perfil"></button></a>
    `;
} else {
    window.location.href = "Index.html";
}

let menu = document.getElementById("menu");

function abrirmenu() {
    if (menu.style.display == "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}

function ExibirPerfil() {
    if (usuarioLogado && imagemPerfil) {
        const ftnmse = document.getElementById("ftnmse");
        if (ftnmse.style.display == "block") {
            ftnmse.style.display = "none";
        } else {
            ftnmse.style.display = "block";
            document.getElementById("perfil-foto").innerHTML = `<img src="${imagemPerfil}" alt="" id="perfil-foto-">`;
            document.getElementById("perfil-nome").innerHTML = `<p> ${usuarioLogado}</p>`;
        }
    }
}
