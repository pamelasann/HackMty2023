import openai from '../config/openaiConfig';

const generateMeta = async (duda) => {



    const question = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
            {
                'role': 'user',
                'content': `Explícame de forma sencilla la siguiente pregunta sobre inversiones financieras: ${duda}`
            }
        ],
        max_tokens: 60
    })

    console.log(question.choices[0].message)
}

export { generateMeta };