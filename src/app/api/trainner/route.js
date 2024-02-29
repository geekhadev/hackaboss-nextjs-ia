import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: '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'
})

const PREGUNTAS_IDONEAS = [
  '¿Qué es un servidor web?',
  '¿Qué protocolos usa una aplicación web?',
  '¿Qué es una API?',
  '¿Qué es React?'
]

const RESPUESTAS = [
  'Un servidor web es un programa que se ejecuta en un servidor y que se encarga de recibir las peticiones de los clientes y de devolverles las respuestas.',
  'Una aplicación web puede usar varios protocolos, pero los más comunes son HTTP y HTTPS.',
  'Una API es un conjunto de reglas y especificaciones que permite a las aplicaciones comunicarse entre sí.',
  'React es una biblioteca de JavaScript para construir interfaces de usuario.'
]

async function analizar (PREGUNTAS_IDONEAS, RESPUESTAS) {
  const messages = [
    { role: 'system', content: 'Comportate como un asistente de programación.' }
  ]

  PREGUNTAS_IDONEAS.forEach((pregunta, index) => {
    messages.push({ role: 'assistant', content: pregunta })
    messages.push({ role: 'user', content: RESPUESTAS[index] })
  })
  messages.push({ role: 'user', content: 'Dame un analisis de como respondí. Se breve no excedas los 400 caracteres. Dame una respuesta cuantitativa un número del 1 al 10' })

  console.log(messages)

  const response = await openai.chat.completions.create({ messages, model: 'gpt-3.5-turbo' })

  return response.choices[0].message.content
}

export async function GET () {
  const result = await analizar(PREGUNTAS_IDONEAS, RESPUESTAS)
  return Response.json({ result })
}
