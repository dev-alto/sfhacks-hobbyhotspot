import { NextResponse } from 'next/server';

export async function GET(request) {
    return new NextResponse(JSON.stringify({ answer: "getted!" }), {
        status: 200,
    });
}

export async function POST(request) {
    const parsedRequest = await request.json();

    console.log(parsedRequest);

    if (!parsedRequest) {
        return new NextResponse(
            JSON.stringify({ name: "Please provide hobbies to search for" }),
            { status: 400 }
        );
    }

    return new NextResponse({ answer: "Hello!" }, {
        status: 200,
    });
}