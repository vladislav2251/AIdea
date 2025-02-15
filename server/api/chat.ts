export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body.text) return { error: "Missing text input" };

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "deepseek/deepseek-r1-distill-llama-70b:free",
            messages: [{ role: "user", content: body.text }],
            "top_p": 1,
            "temperature": 1,
            "repetition_penalty": 1
        }),
        
    });

    if (!res.ok) {
        return { error: "Failed to fetch response" };
    }

    return await res.json();
});
