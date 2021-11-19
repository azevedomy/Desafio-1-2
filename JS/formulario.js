/* dica de function para formulário https://blog.betrybe.com/javascript/javascript-alert/ */
function nome_Pessoa() {
  
  var nome = document.getElementById("nomeid")

  if (nome.value != "") {
    alert("Olá, " + nome.value + ", agradecemos a sua mensagem. Retornaremos o contato em breve!")

  }
}

function Enviar() {

  if (form.mensagem.value == "") {

      alert('Por favor, conclua o preenchimento do formulario!');
      return false;
     
  } else {
   nome_Pessoa()
  }
}
