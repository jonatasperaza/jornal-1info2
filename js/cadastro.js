function cadastrar() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;

    if (usuario && senha) {
        if (localStorage.getItem(usuario)) {
           alert("Usuário já cadastrado.");
        } else {
            localStorage.setItem(usuario, senha);
            alert("Usuário cadastrado com sucesso.");
        }
    } else {
        alert("Informe o nome de usuário e senha.");
    }
}

function fazerLogin() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;

    if (usuario && senha) {
        if (localStorage.getItem(usuario) === senha) {
            alert("Login bem-sucedido.");
            window.location="jornal.html"
        } else {
            alert("Usuário ou senha inválidos.");
        }
    } else {
        alert("Informe o nome de usuário e senha.");
    }
}