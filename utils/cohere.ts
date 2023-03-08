const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";
const DOG_URL = "https://dog.ceo/api/breeds/image/random/1";

const getPrompt = (
  petname: string,
  ability: string,
  personality: string,
  hobby: string,
) => {
  const prompt =
    `Write a creative and funny description for a dog no gender named ${petname}, with the keywords \"${ability}\", \"${personality}\", \"${hobby}\" for a card description of a dog like social media profile but for dogs, using synonims of the keywords.`;
  /*const prompt =
    `Crea una descripcion graciosa de un perro llamado ${petname}, con las palabras clave \"${ability}\", \"${personality}\", \"${hobby}\" para una carta descriptiva de un perro como si fuese para una presentación para una red social o web de perros, utiliza sinonimos de las palabras clave.`; */
  return prompt;
};

export async function describePet(
  petname: string,
  ability: string,
  personality: string,
  hobby: string,
  COHERE_API_KEY: string | null,
) {
  const prompt = getPrompt(petname, ability, personality, hobby);
  console.log(prompt, "KEY");
  const data = {
    model: "command-xlarge-20221108",
    prompt: prompt,
    max_tokens: 60,
    temperature: 1.4,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likehoods: "NONE",
  };
  try {
    console.log(COHERE_API_KEY, "keeey");
    const response = await fetch(COHERE_API_GENERATE_URL, {
      method: "POST",
      headers: {
        Authorization: `BEARER ${COHERE_API_KEY}`,
        "Content-Type": "application/json",
        "Cohere-Version": "2022-12-06",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    console.log(response, "response");
    const [{ text }] = response.generations;
    console.log(text);

    return text;
  } catch (e) {
    console.error(e, "error");
    return "EAT MY BALLS";
  }
}

export const getAvatarDog = async () => {
  try {
    const headers = new Headers({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:8000",
      "Origin": "https://dog.ceo",
      "User-Agent": "request",
    });

    const resp = await fetch(DOG_URL, {
      method: "GET",
      mode: "no-cors",
      headers: headers,
    });
    console.log(resp, "avatar");
    const avatar = await resp.json();

    return avatar.message[0];
  } catch (e) {
    console.error(e);
  }
};
