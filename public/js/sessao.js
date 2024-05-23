// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var primeiroNome = '';

    var spanUser = document.getElementById("spanUser");

    if (email != undefined && nome != undefined) {
        for (let i = 0; i < nome.length; i++) {
            primeiroNome += nome[i];
            if(nome[i] == ' '){
                break
            }
        }
        divLogcad.style ="display: none"
        divBemvindo.style ="display: flex"
        spanUser.innerHTML = primeiroNome;
    } else {
        divLogcad.style ="display: flex"
        divBemvindo.style ="display: none"
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location.reload(true);
}


