const numeroWhatsApp = "5581999393132";

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-whatsapp");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const assunto = document.getElementById("assunto").value;
            const mensagem = document.getElementById("mensagem").value.trim();
            const retorno = document.getElementById("retorno");

            if (!nome || !assunto || !mensagem) {
                retorno.textContent = "Preencha todos os campos.";
                return;
            }

            if (numeroWhatsApp === "5500000000000") {
                retorno.textContent = "O formulário está funcionando. Para enviar, altere o número de exemplo no arquivo js/script.js.";
                return;
            }

            const texto = `Olá! Meu nome é ${nome}. Assunto: ${assunto}. Mensagem: ${mensagem}`;
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
            window.open(url, "_blank", "noopener,noreferrer");
            retorno.textContent = "O WhatsApp foi aberto. Revise e envie a mensagem por lá.";
        });
    }
});
