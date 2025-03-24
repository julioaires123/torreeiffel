
//Dia mês e ano /////////////////////////////////////////////////////////////////////////////////////////////

let dt = new Date();
let ndt = new Date();
ndt.setDate(dt.getDate() + 0);
let diasem = ndt.getDay();
let dia = ndt.getDate();
let mes = ndt.getMonth();
let ano = ndt.getFullYear();



let meses = new Array("Dezembro", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Julho", "Agosto", "Setembro", "Outubro", "Novembro")
let semanas = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado")


document.write(semanas[diasem] + ", " + dia + " de " + meses[mes] + " de " + ano);