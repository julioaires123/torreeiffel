// Atualiza o relógio com horário da França (UTC+1 ou UTC+2 no horário de verão)
setInterval(function relog() {
    let rel = document.getElementById('relogio01');
    let data = new Date();
    data.setUTCHours(data.getUTCHours() + 1); // França UTC+1 (ou UTC+2 no horário de verão automático)
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
    data.setUTCHours(data.getUTCHours() + 1); // Ajuste para o horário da França
    let diasem = data.getDay();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    
    document.getElementById("date").innerHTML = `${semanas[diasem]}, ${dia} ${meses[mes]}, ${ano}`;
}

// Atualiza a data à meia-noite na França
function atualizarData() {
    let data = new Date();
    data.setUTCHours(data.getUTCHours() + 4); // Ajuste para o horário da França
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    if (horas === 0 && minutos === 0 && segundos === 0) {
        exibirDataAtualizada();
    }
    setTimeout(atualizarData, 1000); // Verifica a cada segundo
}

// Inicializa a data e a atualização automática
exibirDataAtualizada();
atualizarData();
