function cadastrar() {
            var nome = document.getElementById("nome").value.trim();
            var email = document.getElementById("email").value.trim();
            var senha = document.getElementById("senha").value;
            var confirmarSenha = document.getElementById("confirmarsenha").value;

            if (nome === "" || email === "" || senha === "" || confirmarSenha === "") {
                alert("Preencha todos os campos!");
                return false;
            }

            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem!");
                return false;
            }

            alert("Cadastro realizado com sucesso!");
            var usuario = {
                nome: nome,
                email: email,
                senha: senha
            };
            var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
            usuarios.push(usuario);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
            window.location.href = "index.html"; 
            return true; 
        }