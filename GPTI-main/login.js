function logar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "" || senha === "") {
        alert("Preencha todos os campos!");
    } else {
        var usuario = {
            email: email,
            senha: senha
        };

        var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        var usuarioEncontrado = usuarios.find(function(u) {
            return u.email === usuario.email && u.senha === usuario.senha;
        });

        if (usuarioEncontrado) {
            localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
            window.location.href = "index.html";
        } else {
            alert("Usuário ou senha incorretos.");
        }
    }
}
