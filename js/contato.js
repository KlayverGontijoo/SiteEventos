function contato(){
    var nome= document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    if(nome == ''){
        alert("Digite o nome.");
        return false;
    }

    if(telefone == ''){
        alert("Digite o numero de telefone.");
        return false;
    }

    var posicao = email.indexOf('@');

    if(posicao <= 0){
        alert("E-mail invalido.");
        return false;
    }

    if(assunto == ''){
        alert("Fale sobre o assunto.");
        return false;
    }
        if(mensagem == ''){
            alert("Digite como quer o evento....");
            return false;
        }
    else{
        alert("Menssagem enviada")
    }

    return true;
}

