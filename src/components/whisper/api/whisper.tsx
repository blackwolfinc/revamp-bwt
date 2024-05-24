import { IncomingForm } from 'formidable';
import fs from 'fs';
import { OpenAI } from 'openai';

export const config = {
  api: {
    bodyParser: false,
  },
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use environment variable for API key
});

const parseForm = (req:any) => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { fields, files }:any = await parseForm(req);
    const { targetLanguage } = fields;
    const { audioData } = files;

    if (!targetLanguage || !audioData) {
      return res.status(400).json({ error: 'Audio data and target language are required' });
    }

    const audioFilePath = audioData.filepath;

    // Transcribe audio using OpenAI Whisper model
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(audioFilePath),
      model: 'whisper-1',
    });

    const transcribedText = transcription.text;

    // Translate text using OpenAI GPT-4
    const translationResponse = await openai.completions.create({
      model: 'gpt-3.5-turbo',
      prompt: `Translate the following text to ${targetLanguage}: ${transcribedText}`,
      max_tokens: 30,
    });

    const translatedText = translationResponse.choices[0].text.trim();

    res.status(200).json({ transcribedText, translatedText });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Error processing request' });
  }
}
