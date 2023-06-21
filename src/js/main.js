function Enviar() {
    if (document.getElementById("user").value == "admin" && document.getElementById("password").value == "admin"){
        window.location="Index.html";
        const user = document.getElementById("user");
    }
    else if (document.getElementById("user").value == "user" && document.getElementById("password").value == "user"){
        windows.location="../secreto/index.html";
        const user = document.getElementById("user");
    }
    else {
        const user = document.getElementById("user").value;
        alert(`O nome de usuario "${user}" ou senha está incorreto`)
    }
}   