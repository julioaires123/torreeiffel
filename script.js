// Atualiza o relógio com horário da França (UTC+1 ou UTC+2 no horário de verão)
setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 25); // ajusta os segundos
    
    let ano = data.getFullYear();
    let mes = data.getMonth();
    let dia = data.getDate();
    let diaSemana = data.getDay();
    
    // Determina o horário de verão na França
    let inicioVerao = new Date(ano, 2, 31); // Último domingo de março
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31); // Último domingo de outubro
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 2 : 1; // UTC+2 no horário de verão, UTC+1 no padrão
    data.setUTCHours(data.getUTCHours() + 3 + fusoHorario); // Ajusta com base no fuso da França /////////////////////////////////////////////////////// aqui
    
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();
    
    if (h < 10) h = `0${h}`;
    if (m < 10) m = `0${m}`;
    if (s < 10) s = `0${s}`;
    
    rel.innerHTML = `${h}:${m}:${s}`;
}, 1000);

// Exibição da data em francês
function exibirDataAtualizada() {
    let meses = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let semanas = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth();
    let dia = data.getDate();
    let diaSemana = data.getDay();
    
    // Determina o horário de verão na França
    let inicioVerao = new Date(ano, 2, 31);
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31);
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 2 : 1;
    data.setUTCHours(data.getUTCHours() + 3 + fusoHorario); // Ajuste para a França ////////////////////////////////////////// aqio
    
    document.getElementById("date").innerHTML = `${semanas[diaSemana]}, ${dia} ${meses[mes]}, ${ano}`;
}

// Atualiza a data à meia-noite na França
function atualizarData() {
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 25);
    
    let ano = data.getFullYear();
    let inicioVerao = new Date(ano, 2, 31);
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31);
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 2 : 1;
    data.setUTCHours(data.getUTCHours() + 3 + fusoHorario); ////////////////////////////////////////////////////////////////////////////////aqui
    
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    
    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000);
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
