// Atualiza o relógio com horário da França (UTC+1 ou UTC+2 no horário de verão)
setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 25); // Ajusta os segundos
    
    let ano = data.getFullYear();
    let mes = data.getMonth();
    let dia = data.getDate();
    
    // Determina o horário de verão na França
    let inicioVerao = new Date(ano, 2, 31); // Último domingo de março
    while (inicioVerao.getDay() !== 0) inicioVerao.setDate(inicioVerao.getDate() - 1);
    let fimVerao = new Date(ano, 9, 31); // Último domingo de outubro
    while (fimVerao.getDay() !== 0) fimVerao.setDate(fimVerao.getDate() - 1);
    
    let fusoHorario = (data >= inicioVerao && data < fimVerao) ? 2 : 1; // UTC+2 no horário de verão, UTC+1 no padrão
    data.setUTCHours(data.getUTCHours() + fusoHorario + 1); // Ajusta com base no fuso da França
    
    let h = data.getHours().toString().padStart(2, '0');
    let m = data.getMinutes().toString().padStart(2, '0');
    let s = data.getSeconds().toString().padStart(2, '0');
    
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
    data.setUTCHours(data.getUTCHours() + fusoHorario + 1);
    
    if (data.getHours() === 0 && data.getMinutes() === 0 && data.getSeconds() === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000);
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
