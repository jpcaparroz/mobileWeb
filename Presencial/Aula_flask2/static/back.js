function validarFilme() {
    var filme = document.getElementById("filme");
    var confirmacao = 'VINGADORES';

    alert(filme.value !== confirmacao);

    filme.setCustomValidity("");
    confirmacao.setCustomValidity("");

    if (filme.value !== confirmacao) {
        
        filme.setCustomValidity("O filme esta errado");
        filme.reportValidity();

        filme.style.backgroundColor = "#FFC0CB";

        return false;
    }

    alert('Enviado!');

    return true;
}