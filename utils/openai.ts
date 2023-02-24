import { OpenAI } from "https://deno.land/x/openai@v1.1.0/mod.ts";

const OPENAI_API_KEY = "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";

const openAI = new OpenAI(OPENAI_API_KEY);

export async function getChatAI(text: string) {
  // Call OpenAI
  const response = await openAI.createCompletion(text);

  // Do something with the response
  console.log(response);

  return response;

  // Send the response to the client
}
