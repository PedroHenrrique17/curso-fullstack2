const formulario = document.getElementById("meuFormulario")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome")
    const telefone = document.getElementById("telefone")
    const sexo = document.getElementById("sexo")
    const email = document.getElementById("email")
    const checkbox = document.getElementById("s")

    console.log(nome.value)
    console.log(telefone.value)
    console.log(sexo.value)
    console.log(email.value)

    // Validação 
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

    // Limpa campos
    nome.value = "";
    telefone.value = "";
    email.value = "";
    checkbox.checked = false;
    


    alert("Formulário enviado!");

});