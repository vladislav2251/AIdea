<template>
    <div class="flex relative w-full h-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
        <Container>
            <ClientOnly>
                <div class="flex relative flex-col items-center px-4 mb-10">
                    <h2 class="mb-4 text-center text-xl text-black sm:mb-20 sm:text-5xl dark:text-white">
                        Pen your thoughts
                    </h2>
                    <VanishingInput v-model="text" :placeholders="placeholders" @submit="sendMessage" />
                </div>
            </ClientOnly>
            <div class="grid relative w-full gap-1.5 z-10">
                <Textarea id="output" v-model="response" placeholder="Your output message." />
                <button @click="sendMessage" :disabled="loading" class="border px-4 py-2 mt-2">
                    {{ loading ? "Thinking..." : "Generate" }}
                </button>
            </div>
        </Container>
        <ParticlesBackground
            class="absolute inset-0"
            :quantity="100"
            :ease="100"
            :color="isDark ? '#FFF' : '#000'"
            :staticity="10"
            refresh
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const placeholders = [
    "AI-generated startup concepts",
    "Innovative marketing campaign ideas",
    "Creative project suggestions powered by AI",
    "AI-driven business model proposals",
    "AI-enhanced product development strategies",
];

const text = ref("");
const response = ref("");
const loading = ref(false);
const isDark = computed(() => useColorMode().value == "dark");

async function sendMessage() {
    if (!text.value || loading.value) return;

    response.value = "Loading...";
    loading.value = true;

    try {
        const res = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: text.value }),
        });

        if (!res.ok) throw new Error("API request failed");

        const data = await res.json();
        response.value = data.choices?.[0]?.message?.content || "No response received.";
    } catch (error) {
        response.value = "Error: " + error.message;
    } finally {
        loading.value = false;
    }
}
</script>
