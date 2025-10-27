//class contato
class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

const termosDeUso = document.getElementById("termosUso");
const btnEnviar = document.querySelector("button");
const mensagem = document.querySelector("abbr");

termosDeUso.addEventListener("change", function() {
    if (termosDeUso.checked) {
        btnEnviar.classList.remove("disabled");
        btnEnviar.removeAttribute("disabled");
        mensagem.removeAttribute("title");
    } else {
        btnEnviar.classList.toggle("disabled");
        btnEnviar.toggleAttribute("disabled", "true");
        mensagem.setAttribute("title", "É necessário aceitar os termos de uso.")
    }

})

function Post(form, event) {
    event.preventDefault();
    
    let data = new Contato(form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value);
    
    
    const nome = document.getElementById("nomeid");
    
    if (nome.value != "" && termosDeUso.checked) {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        form.reset();
    }
    
    console.log(data);
}

function Enviar() {
    console.log('Dados enviados com sucesso!')
}
