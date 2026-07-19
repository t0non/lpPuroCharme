/**
 * scripts/submit-indexnow.ts
 *
 * Script manual para submissão de URLs ao IndexNow (Bing, Yandex, etc.)
 *
 * COMO USAR:
 * 1. Gere uma chave em https://www.bing.com/indexnow/getstarted
 * 2. Adicione ao .env.local:
 *    INDEXNOW_KEY=sua-chave-aqui
 *    NEXT_PUBLIC_SITE_URL=https://purocharmebh.site
 * 3. Crie o arquivo de verificação da chave (ex: public/sua-chave.txt) contendo apenas a chave
 * 4. Execute: npx tsx scripts/submit-indexnow.ts
 *
 * IMPORTANTE:
 * - Não dispare este script automaticamente a cada acesso de usuário
 * - Execute apenas após publicar conteúdo novo ou atualizar páginas
 * - O IndexNow aceita no máximo 10.000 URLs por requisição
 * - Não envie URLs que não existam ou que retornem status diferente de 200
 * - Este script NÃO garante indexação — apenas notifica os mecanismos de busca
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://purocharmebh.site";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY;

/** URLs públicas e indexáveis do site */
const URLS_TO_SUBMIT: string[] = [
  `${SITE_URL}/`,
  `${SITE_URL}/vestidos-debutantes`,
  `${SITE_URL}/damas-e-daminhas`,
  `${SITE_URL}/vestidos-de-festa`,
  `${SITE_URL}/ternos-e-pajens`,
  `${SITE_URL}/galeria`,
  `${SITE_URL}/sobre`,
  `${SITE_URL}/contato`,
  `${SITE_URL}/guias`,
  `${SITE_URL}/guias/como-escolher-vestido-debutante`,
  `${SITE_URL}/guias/quanto-tempo-antes-alugar-vestido-debutante`,
  `${SITE_URL}/guias/como-combinar-vestidos-damas-daminhas`,
  `${SITE_URL}/guias/aluguel-ou-compra-vestido-festa`,
  `${SITE_URL}/guias/vestidos-edificio-mariana-bh`,
];

async function submitIndexNow(): Promise<void> {
  if (!INDEXNOW_KEY) {
    console.error(
      "❌ Variável INDEXNOW_KEY não definida.\n" +
        "   Adicione ao .env.local: INDEXNOW_KEY=sua-chave\n" +
        "   Gere uma chave em: https://www.bing.com/indexnow/getstarted"
    );
    process.exit(1);
  }

  const host = new URL(SITE_URL).hostname;
  const keyLocation = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

  const payload = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: URLS_TO_SUBMIT,
  };

  console.log(`\n📤 Submetendo ${URLS_TO_SUBMIT.length} URLs ao IndexNow...`);
  console.log(`   Host: ${host}`);
  console.log(`   Key location: ${keyLocation}\n`);

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (response.ok || response.status === 202) {
      console.log(`✅ Sucesso! Status: ${response.status}`);
      console.log("   URLs enviadas:");
      URLS_TO_SUBMIT.forEach((url) => console.log(`   - ${url}`));
    } else {
      const body = await response.text();
      console.error(`❌ Erro: ${response.status} ${response.statusText}`);
      console.error(`   Resposta: ${body}`);
    }
  } catch (error) {
    console.error("❌ Falha na requisição:", error);
    process.exit(1);
  }
}

submitIndexNow();
