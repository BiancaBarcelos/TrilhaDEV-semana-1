/* Questão 2 */

function preencheCampo(event) {

    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let profissao =  document.getElementById("profissao").value;
    let fmt = document.getElementById("fmt").value;
    console.log(nome, idade, profissao, fmt)
    
    if (nome != "" && idade != "" && profissao != "" && fmt != "") {
      document.getElementById("frase").innerHTML =
      "Meu nome é " + nome + ", tenho " + idade + " anos e minha profissão é " + profissao +". O meu objetivo no Floripa Mais Tec é " + fmt + ".";
    } else {
        let camposVazios = [];

        nome === "" ? camposVazios.push("Nome"):"";
        idade === "" ? camposVazios.push(" Idade"):"";
        profissao === "" ? camposVazios.push(" Profissão"):"";
        fmt === "" ? camposVazios.push(" Qual seu objetivo no Floripa Mais Tec?"):"";

        alert(`Está faltando preencher o(s) campo(s) ${camposVazios}`);
    }


    
  }


  let nome = "Bianca Silva Barcelos";
  let idade = 25;
  let profissao =  "Dev Developer";
  let fmt = "me tornar uma profissional na área da Tecnologia!";
  
  
  console.log("Meu nome é " + nome + ", tenho " + idade + " anos e minha profissão é " + profissao +". O meu objetivo no Floripa Mais Tec é " + fmt + ".")

  
/* Questão 3 */

function preencherIdade(event) {

    event.preventDefault();

    let idade_cliente = document.getElementById("idade_cliente").value;
    
    if (idade_cliente !== "") {
        if (parseInt(idade_cliente) >= 18) {
            document.getElementById("idadeCliente").innerHTML = "O usuário é maior de idade";
            console.log("O usuário é maior de idade");
        }else {
            document.getElementById("idadeCliente").innerHTML = "O usuário é menor de idade";
        }
    }else {
        alert("Está faltando preencher o campo de idade!");
    }

}

/* Questão 4 */

function validaItens(event) {
    event.preventDefault();

    let mochila = document.getElementById("mochila").checked;
    let caderno = document.getElementById("caderno").checked;
    let caneta = document.getElementById("caneta").checked;

    if (mochila && caderno && caneta) {
        document.getElementById("irEscola").innerHTML = "Tenho o necessário para estudar, vou pra escola!";
    }else {
        alert("Falta algum material!");
    }

}
