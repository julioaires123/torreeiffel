//horário de Brasília////////////////////////////////////////////////////////////////////////////////////////
        setInterval(function relog() {
        let rel = document.getElementById('relogio01')
        let data = new Date();
        data.setHours(data.getHours() +4);
        data.setSeconds(data.getSeconds() +19);
        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds();
          if (h < 10) {// coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        if (m < 10) {
           m = `0${m}`
        }  
        if (s < 10) {
           s = `0${s}`
        }
        // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
            rel.innerHTML = `${h}:${m}:${s}`
        })
    
//Dia mês e ano /////////////////////////////////////////////////////////////////////////////////////////////
// Função para exibir a data atualizada
function exibirDataAtualizada() { 
    let meses = [
        "janvier", "février", "mars", "avril", "mai", "juin", 
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];
    
    let semanas = [
        "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"
    ];

    let agora = new Date();
    let diasem = agora.getDay();
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.getFullYear();

    // Atualiza o conteúdo do elemento com o ID "date"
    document.getElementById("date").innerHTML = semanas[diasem] + " " + dia + " " + mois[mes] + " " + ano;
}


// Função para atualizar a data a cada segundo
function atualizarData() {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let segundos = data.getSeconds();

  // Verifica se é meia-noite (00:00:00)
  if (horas === 0 && minutos === 0 && segundos === 0) {
    exibirDataAtualizada();

    // Define o próximo intervalo de atualização para o próximo dia
    let proximaAtualizacao = new Date();
    proximaAtualizacao.setDate(proximaAtualizacao.getDate() + 0);     
    proximaAtualizacao.setHours(0);
    proximaAtualizacao.setMinutes(0);
    proximaAtualizacao.setSeconds(0);

    let tempoAteProximaAtualizacao = proximaAtualizacao.getTime() - data.getTime();

    setTimeout(atualizarData, tempoAteProximaAtualizacao);
  } else {
    setTimeout(atualizarData, 1000); // Chama a função novamente após 1 segundo
  }
}

// Chama a função para exibir a data atualizada
exibirDataAtualizada();

// Atualiza a data a cada segundo
atualizarData();
