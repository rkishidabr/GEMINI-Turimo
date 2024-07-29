import  {inicializaModelo} from './modelo.js'
import  {fazerPergunta} from './pergunta.js' 
import 'dotenv/config'


async function run() {
  const model = await inicializaModelo( "gemini-1.5-flash");
  let anamnese= "O contexto aqui é discorrer sempre sobre conteudo de viagem. Você é uma agente de viagem. Caso usuário mude de assunto diga enfaticamente que não poderá."  
  const prompt = anamnese + await fazerPergunta("Fale-me o que deseja:");
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();