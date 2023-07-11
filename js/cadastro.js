function cadastrar() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;
    let imagemInput = document.getElementById("imagemInput");

    if (usuario && senha) {
        if (localStorage.getItem(usuario)) {
            alert("Usuário já cadastrado.");
        } else {
            if (imagemInput.files && imagemInput.files[0]) {
                let arquivoImagem = imagemInput.files[0];
                let leitor = new FileReader();

                leitor.onload = function(e) {
                    let imagemBase64 = e.target.result;

                    // Armazena o nome de usuário, senha e imagem codificada em Base64 no localStorage
                    localStorage.setItem(usuario, JSON.stringify({ senha: senha, imagem: imagemBase64 }));
                    alert("Usuário cadastrado com sucesso.");
                };

                leitor.readAsDataURL(arquivoImagem);
            } else {
                // Caso o usuário não selecione uma imagem, armazena apenas o nome de usuário e senha
                localStorage.setItem(usuario, JSON.stringify({ senha: senha }));
                alert("Usuário cadastrado com sucesso.");
            }
        }
    } else {
        alert("Informe o nome de usuário e senha.");
    }
}
function fazerLogin() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;

    if (usuario && senha) {
        if (localStorage.getItem(usuario)) {
            let dadosUsuario = JSON.parse(localStorage.getItem(usuario));
            if (dadosUsuario.senha === senha) {
                alert("Login bem-sucedido.");

                // Armazena o nome de usuário e a imagem de perfil no sessionStorage
                sessionStorage.setItem("usuarioLogado", usuario);
                sessionStorage.setItem("imagemPerfil", dadosUsuario.imagem);

                // Redireciona para a página jornal.html
                window.location.href = "jornal.html";
            } else {
                alert("Senha incorreta.");
            }
        } else {
            alert("Usuário não cadastrado.");
        }
    } else {
        alert("Informe o nome de usuário e senha.");
    }
}
