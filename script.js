const API_URL = "https://dashboard-financeiro.vercel.app/api/dashboard";

async function carregarDados() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    // 💰 Cotações
    document.getElementById("dolar").innerText = `R$ ${data.cotacoes.dolar}`;
    document.getElementById("bitcoin").innerText = `$ ${data.cotacoes.bitcoin}`;

    // 🕒 Horários
    document.getElementById("horarios").innerText =
      `Brasília: ${formatarHora(data.time.brasilia)} | 
       NY: ${formatarHora(data.time.new_york)} | 
       Londres: ${formatarHora(data.time.londres)} | 
       Tóquio: ${formatarHora(data.time.tokyo)}`;

    // 📰 Notícias (ticker)
    const noticiasTexto = data.noticias.map(n => n.titulo).join(" • ");
    document.getElementById("ticker").innerText = noticiasTexto;

  } catch (err) {
    console.error("Erro ao carregar dados", err);
  }
}

function formatarHora(dataISO) {
  const data = new Date(dataISO);
  return data.toLocaleTimeString("pt-BR");
}

// Atualiza a cada 60s
carregarDados();
setInterval(carregarDados, 60000);
