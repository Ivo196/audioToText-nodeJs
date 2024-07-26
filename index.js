import { AssemblyAI } from 'assemblyai';
import { config } from "dotenv";

config()

const client = new AssemblyAI({
    apiKey:process.env.APY_KEY
})
const audioUrl =
  'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

const audioUrl2 = './audio.mp3'

const params = {
  audio: audioUrl2,
}

const run = async () => {
   const trascript = await client.transcripts.transcribe(params)
   console.log(trascript.text)
}

run()