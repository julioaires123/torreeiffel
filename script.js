// Função para verificar se está no horário de verão na França (último domingo de março até o último domingo de outubro)
function isHorarioVeraoFranca(date) {
    let ano = date.getFullYear();

    // Último domingo de março (início do horário de verão)
    let ultimoDomingoMarco = new Date(Date.UTC(ano, 2, 31)); // 31 de março
    while (ultimoDomingoMarco.getUTCDay() !== 0) { // Enquanto não for domingo, volta um dia
        ultimoDomingoMarco.setUTCDate(ultimoDomingoMarco.getUTCDate() - 1);
    }

    // Último domingo de outubro (fim do horário de verão)
    let ultimoDomingoOutubro = new Date(Date.UTC(ano, 9, 31)); // 31 de outubro
    while (ultimoDomingoOutubro.getUTCDay() !== 0) {
        ultimoDomingoOutubro.setUTCDate(ultimoDomingoOutubro.getUTCDate() - 1);
    }

    return date >= ultimoDomingoMarco && date < ultimoDomingoOutubro;
}

// Atualiza o relógio com horário correto da França
setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setUTCSeconds(data.getUTCSeconds() + 25); // Ajuste de segundos

    // Ajuste automático para UTC+1 ou UTC+2 no horário de verão
    let offsetHoras = isHorarioVeraoFranca(data) ? 2 : 1;
    data.setUTCHours(data.getUTCHours() + offsetHoras);

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
    let offsetHoras = isHorarioVeraoFranca(data) ? 2 : 1;
    data.setUTCHours(data.getUTCHours() + offsetHoras);

    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} ${meses[mes]}, ${ano}`;
}

// Atualiza a data à meia-noite na França
function atualizarData() {
    let data = new Date();
    let offsetHoras = isHorarioVeraoFranca(data) ? 2 : 1;
    data.setUTCHours(data.getUTCHours() + offsetHoras);
    
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
