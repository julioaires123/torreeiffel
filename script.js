const API_URL = "https://dashboard-financeiro.vercel.app/api/dashboard";

export default async function handler(req, res) {
  try {

    // ⏰ Horários (gerados localmente - não depende de API externa)
    const agora = new Date();

    const time = {
      brasilia: agora.toLocaleTimeString("pt-BR", { timeZone: "America/Sao_Paulo" }),
      new_york: agora.toLocaleTimeString("en-US", { timeZone: "America/New_York" }),
      londres: agora.toLocaleTimeString("en-GB", { timeZone: "Europe/London" }),
      tokyo: agora.toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" })
    };

    // 💰 Dólar (API confiável sem chave)
    const dolarRes = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const dolarData = await dolarRes.json();

    // 🪙 Bitcoin (CoinGecko - sem chave)
    const btcRes = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const btcData = await btcRes.json();

    // 📰 Notícias (mock inteligente para não quebrar)
    const noticias = [
      { titulo: "Mercados globais operam em alta hoje", fonte: "Finance News" },
      { titulo: "Bitcoin mantém tendência de valorização", fonte: "Crypto Times" },
      { titulo: "Dólar oscila com dados econômicos", fonte: "Market Watch" }
    ];

    res.status(200).json({
      time,
      cotacoes: {
        dolar: dolarData.USDBRL.bid,
        bitcoin: btcData.bitcoin.usd
      },
      noticias
    });

  } catch (error) {
    res.status(500).json({
      erro: "API funcionando, mas falha externa",
      detalhe: error.message
    });
  }
}
