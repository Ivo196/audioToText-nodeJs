import { AssemblyAI } from 'assemblyai';


const client = new AssemblyAI({
    apiKey: process.env.APY_KEY
})
const audioUrl =
  'https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3'

const audioUrl2 =
  './audio.mp3'

const params = {
  audio: audioUrl,
}

const run = async () => {
   const trascript = await client.transcripts.transcribe(data)
   console.log(trascript.text)
}

run