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
            model: "deepseek/deepseek-r1:free",
            messages: [{ role: "user", content: body.text }],
        }),
    });

    if (!res.ok) {
        return { error: "Failed to fetch response" };
    }

    return await res.json();
});
