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
            <GlowBorder
                    class="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                    :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
            >
                <Textarea class="border-0 outline-none" id="output" v-model="response" placeholder="Your output message." />
            </GlowBorder>
            <InteractiveButton @click="sendMessage" :disabled="loading" class="border px-4 py-2 mt-2" />
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
import InteractiveButton from '~/components/ui/interactive-button/interactiveButton.vue';
import GlowBorder from '~/components/ui/border/glowBorder.vue';
const placeholders = [
    "Why is my code always broken?",
    "What does 'undefined' even mean?",
    "How to center a div (for real this time)",
    "Am I smarter than a compiler?",
    "Do loops ever get dizzy?",
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
