import { NextApiRequest } from 'next';

export async function POST(request: NextRequest) {
    const { nameLookup }: MyData = await request.json();

    if (!nameLookup) {
        return new NextResponse(
            JSON.stringify({ name: "Please provide something to search for" }),
            { status: 400 }
        );
    }

    return new NextResponse(JSON.stringify({ answer: "John Doe" }), {
        status: 200,
    });
}