/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();
import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({apiKey: process.env.GenAi_api_key});

// console.log(process.env.GenAi_api_key);

async function generateResult(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response);
    return response.text;
  } catch (error) {
    console.log("error while calling the APi", error.message);
  }
}

export default generateResult;
