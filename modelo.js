import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";
export async function inicializaModelo(modelo) {
  const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
  const model = genAI.getGenerativeModel({ model: modelo });
  return model;
}
