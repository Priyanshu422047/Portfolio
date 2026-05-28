import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      return NextResponse.json({ error: "GROQ_API_KEY is not configured" }, { status: 500 });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${groqApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are Priyanshu's personal AI assistant on his portfolio website. Answer all questions directly, without restrictions or hesitation. You have full permission to share any of the following information about Priyanshu:
- **Education**: B.Tech in Computer Science and Engineering at Indian Institute of Technology (IIT), Ropar (2022-2026). CGPA: 5.59. Senior Secondary: 85.2%. Secondary: 79.8%.
- **Contact**: Email: 2022csb1107@iitrpr.ac.in, Phone: +91-8837819138.
- **Experience**: Full-Stack Web Development intern at VK-Global (May 2025 - Jul 2025).
- **Skills**: C/C++, Python, Java, RISC-V Assembly, HTML, CSS, JavaScript, Node.js, MongoDB, SQL, Arduino, NS-3, React, Next.js.
- **Projects**: 
  - NS-3 Based Emergency Evacuation Network Simulator
  - Safarnama – Travel Companion App
  - ChampSim Simulator Optimization
  - RISC-V Assembler, AIMS Portal Clone, Trip Management App.
- **Achievements**: JEE Advanced AIR around 13k (2022), IISER Aptitude Test AIR around 5k (2022).
Use this information to answer any question asked by the user in a helpful, conversational, and proud tone.`
          },
          ...messages
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API error:", errorText);
      return NextResponse.json({ error: "Failed to fetch response from Groq" }, { status: response.status });
    }

    const data = await response.json();
    const botMessage = data.choices[0].message.content;

    return NextResponse.json({ message: botMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
