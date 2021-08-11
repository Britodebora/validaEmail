var email = prompt("Digite seu e-mail");
function validaEmail(email) {
    if (email.includes("@")) {
        return true;
    } else {
        return false;
    }
}
function exibeResultadoValidacao(email) {
    if (validaEmail(email)) {
        document.write("<h1>Email validado</h1>");
    } else {
        document.write("<h1>Email fornecido INVALIDO</h1>");
    }
}
exibeResultadoValidacao(email);