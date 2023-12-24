import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyDBrpKkVxCsNigxEIHy1gphPDZMUMGU-5U";

async function generateStory(prompt, tags) {
  const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
  });

  const promptString = `write story on ${prompt}, of the ${tags} genre`;
  const stopSequences = [];

  try {
    const result = await client.generateText({
      model: MODEL_NAME,
      temperature: 0.85,
      candidateCount: 1,
      top_k: 40,
      top_p: 0.95,
      max_output_tokens: 16000,
      stop_sequences: stopSequences,
      safety_settings: [
        { category: "HARM_CATEGORY_DEROGATORY", threshold: 1 },
        { category: "HARM_CATEGORY_TOXICITY", threshold: 1 },
        { category: "HARM_CATEGORY_VIOLENCE", threshold: 2 },
        { category: "HARM_CATEGORY_SEXUAL", threshold: 2 },
        { category: "HARM_CATEGORY_MEDICAL", threshold: 2 },
        { category: "HARM_CATEGORY_DANGEROUS", threshold: 2 },
      ],
      prompt: {
        text: promptString,
      },
    });

    const story = JSON.stringify(result[0].candidates[0].output, null, 2);
    return story;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default generateStory;
