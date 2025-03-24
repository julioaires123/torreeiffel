//horário de Brasília////////////////////////////////////////////////////////////////////////////////////////
        setInterval(function relog() {
        let rel = document.getElementById('relogio01')
        let data = new Date();
        data.setHours(data.getHours() -1);
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
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    let semanas = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

  let data = new Date();
  let diasem = data.getDay();
  let dia = data.getDate();
  let mes = data.getMonth();
  let ano = data.getFullYear();

  // Verifica se é meia-noite (00:00:00)
  if (data.getHours() === 0 && data.getMinutes() === 0 && data.getSeconds() === 0) {
    // Incrementa um dia
    data.setDate(data.getDate() + 0);
    dia = data.getDate();
    mes = data.getMonth();
    ano = data.getFullYear();
  }

  // Atualiza o conteúdo do elemento com o ID "date"
  document.getElementById("date").innerHTML = semanas[diasem] + ", " + meses[mes] +  " " + dia + ", "  + ano;
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
