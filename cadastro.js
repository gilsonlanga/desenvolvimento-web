//TRABALHO DESENVOLVIDO POR GILSON LANGA E VITÓRIA ANDREA OLIVEIRA DA SILVA

const form = document.querySelector('#formulario');
const listarOcupadas = document.getElementById("listarOcupadas");
const listarLivres = document.getElementById("listarLivres");

const totalVagas = 5;



let vagas = new Array(totalVagas);

for (i=0; i<totalVagas; i++) {
    vagas[i] = {vagaOcupada: false};
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const json = {};

    for (const[key, value] of formData.entries()) {
        json[key] = value;
    }

    validarVaga();
 
    function validarVaga() {


        for(let i=0; i<totalVagas; i++) {
            if (parseInt(json.numeroVaga) == (i+1)) {
                if (vagas[i].vagaOcupada == false) {
                    vagas[i] = json;
                    vagas[i].vagaOcupada = true;
                    alert(`Vaga ${i+1} Cadastrada com Sucesso`);
                } else {
                    alert("VAGA "+ (i+1) + " INDISPONÍVEL!!!");
                }
            }
        }

        
        
        
    }

    for (let i=0; i<totalVagas; i++) {
        console.log(vagas[i]);
    }
    
    
    form.reset();



});


function listarVagasOcupadas() {
    let vagasOcupadas = "";

    for (let i=0; i<totalVagas; i++) {
        if(vagas[i].vagaOcupada == true) {

            vagasOcupadas = vagasOcupadas + "<br>" + "Vaga " + (i+1) + " - Ocupada" + "<br>" + 
            "Placa do Veículo: " + vagas[i].placa + "<br>" +
            "Proprietário: " + vagas[i].proprietario + "<br>" +
            "Apartamento: " + vagas[i].apartamento + "<br>" +
            "Bloco: " + vagas[i].bloco + "<br>" +
            "Modelo do Veículo: " + vagas[i].modeloVeiculo + "<br>" +
            "Cor do Veículo: " + vagas[i].corVeiculo + "<br>" +
            "Numero da Vaga: " + vagas[i].numeroVaga + "<br>"; 


        }
    }

    

    if (vagasOcupadas != "") {
        var elemento = document.getElementById("divListarOcupadas");
        elemento.style.background = "linear-gradient(90deg, darkred 0%, red 100%)";
        listarOcupadas.innerHTML = vagasOcupadas;
        
    }

    
    
       
}


function listarVagasLivres() {
    let vagasLivres = "";

    for (let i=0; i<totalVagas; i++) {
        if(vagas[i].vagaOcupada == false) {
            vagasLivres = vagasLivres + "Vaga " + (i+1) + " - Livre<br>";
        }
    }

    if (vagasLivres != "") {
        listarLivres.innerHTML = vagasLivres;
    } else {
        var elemento2 = document.getElementById("divListarLivres");
        elemento2.style.background = "linear-gradient(90deg, darkred 0%, red 100%)";
        listarLivres.innerHTML = "Nenhuma Vaga Disponível";
    }

    
    
       
}