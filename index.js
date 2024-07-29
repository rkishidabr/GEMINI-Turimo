import { fazerPergunta } from './pergunta.js';
import { perguntar } from './perguntaLivre.js';
import { consultar } from './consultaDestino.js';
import { processaImagem } from './processaImagem.js';



async function principal() {
  const escolha = await fazerPergunta(`Escolha uma das opções abaixo: \n
  1. Fazer uma pergunta livre sobre um destino;
  2. Comparação de destinos por categorias;
  3. Descricao de uma imagem;
  \nOpção desejada: `);

  if (escolha === '1') {
    await perguntar();
  } else if (escolha === '2') {
    await consultar();
  }else if(escolha==='3'){
    const imagem = await fazerPergunta("\nMe informe o caminho completo e nome da imagem:")
        await processaImagem(imagem);
  }else {
    console.log('Escolha inválida.');
  }
}

principal();
