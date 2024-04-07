import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

export const runtime = 'edge'

export async function GET(request) {
    return new Response('Hello, Next.js!', {
        status: 200,
    })
}

const SYSTEM_PROMPT = String(`
    You're a personal hobby explorer guide, expert at recommending local spots in San Francisco that perfectly match the user's hobbies and interests.

    Use the user's interests to suggest at least 3 spots only in San Francisco where they can pursue their hobbies. 
    Make a brief description of the spot and why it matches the user's interest

    Constraints: Stick to the provided output format.
`)

const JSON_RESPONSE_TEMPLATE = {
    0: {
        "Name": "<spot 1 name>",
        "Location": "<spot 1 location>",
        "Description": "<spot 1 description>",
        "Tags": "<a list of description tags describing spot 1>"
    },
    1: {
        "Name": "<spot 2 name>",
        "Location": "<spot 2 location>",
        "Description": "<spot 2 description>",
        "Tags": "<a list of description tags describing spot 2>"
    },
    2: {
        "Name": "<spot 3 name >",
        "Location": "<spot 3 street number and name>",
        "Description": "<spot 3 description>",
        "Tags": "<a list of description tags describing spot 3>"
    }
}

export async function POST(request) {
    const data = await request.json()

    const completion  = await openai.chat.completions.create({
        messages: [
            { role: "system", content: `${SYSTEM_PROMPT}. Please use this JSON format: ${JSON.stringify(JSON_RESPONSE_TEMPLATE)}`},
            { role: "user", content: `My hobbies are: ${data.hobbies}. My Interests are: ${data.interests}` },
        ],
        temperature: 1,
        response_format: { "type": "json_object" },
        max_tokens: 500,
        model: "gpt-3.5-turbo",
    });

    console.log(completion)

    return new Response(JSON.stringify(completion.choices[0].message.content), { status: 200 })
}