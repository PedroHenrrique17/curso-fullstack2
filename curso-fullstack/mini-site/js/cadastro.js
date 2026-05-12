const formulario = document.getElementById("form-cadastro")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();


    const nome = document.getElementById("nome")
    const telefone = document.getElementById("telefone")
    const email = document.getElementById("email")


    console.log(nome.value)
    console.log(telefone.value)
    console.log(email.value)


    if (nome.value.trim() === "") {
        alert("Preencha o nome")
        return false;
    }

    if (telefone.value.trim() === "") {
        alert("Preencha seu telefone")
        return false;
    }

    if (email.value.trim() === "") {
        alert("Preencha seu email")
        return false;
    }


    nome.value = "";
    telefone.value = "";
    email.value = "";
    checkbox.checked = false;

    alert("Cadastro enviado!");

})