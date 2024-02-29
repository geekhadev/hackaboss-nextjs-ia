import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: ''
})

// uso del modelo de texto
// const completion = await openai.chat.completions.create({
//   messages: [
//     { role: 'system', content: 'Comportate como un asistente de programación.' },
//     { role: 'user', content: 'Qué es mejor Nextjs o Nuxtjs?' },
//     { role: 'assistant', content: 'No te puedo responder porque depende de muchos factores determinar que framework es mejor.' },
//     { role: 'user', content: 'Qué es mejor React o Vue?' } // <- este es el que openai va a responder
//   ],
//   model: 'gpt-3.5-turbo'
// })

// console.log(completion.choices[0])

// uso del modelo de interpretación de imagenes
// const response = await openai.chat.completions.create({
//   model: 'gpt-4-vision-preview',
//   messages: [
//     {
//       role: 'user',
//       content: [
//         { type: 'text', text: 'Interpreta esta imagen, responde en español' },
//         {
//           type: 'image_url',
//           image_url: {
//             url: 'https://media.licdn.com/dms/image/C4D16AQFh_3zKsTV5HQ/profile-displaybackgroundimage-shrink_350_1400/0/1652212347879?e=1714608000&v=beta&t=xA17mu4oNGBQHLmdA1Ruz5i0OOk5UTDPwn-52UzUy4A'
//           }
//         }
//       ]
//     }
//   ],
//   max_tokens: 300
// })

// Uso del modelo de moderación de texto
// const moderation = await openai.moderations.create({ input: 'Te voy a asesinar porque me caes muy mal, pintare tu auto de rojo y lo lanzaré por una colina' })
// console.log(moderation.results[0].category_scores, moderation.results[0].categories)
