
// src/app/api/chat/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    // Burada OpenAI API isteği yerine dummy bir response döndürüyoruz
    const dummyResponse = "This is a dummy response based on your prompt: " + prompt;

    return NextResponse.json({ reply: dummyResponse });
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

// // src/app/api/chat/route.ts

// import { NextRequest, NextResponse } from 'next/server';
// import OpenAI from 'openai';

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { prompt } = await req.json();

//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: prompt }],
//       max_tokens: 150,
//     });

//     const reply = response.choices[0].message?.content?.trim();

//     return NextResponse.json({ reply });
//   } catch (error) {
//     console.error("Error processing request:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// }
