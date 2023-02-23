/*import { create, setApiKey } from 'openai';
import { openai } from "../deps.ts";

const OPENAI_API_KEY = "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";
openai.apiKey = OPENAI_API_KEY;

/*export async function getChatAI(text: string) {
  const prompt = text;
  console.log(prompt);
  const completions = await openai.completions.create({
    engine: "text-davinci-002",
    prompt,
    maxTokens: 60,
    n: 1,
    stop: ["\n"],
  });

  const message = completions.choices[0].text.trim();
  console.log(completions);
  return message;
}

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export async function getChatAI(text: string) {
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    max_tokens: 1024,
    n: 1,
    stop: null,
    temperature: 0.7,
  });
  console.log(completion.data.choices[0].text);
}
*/
