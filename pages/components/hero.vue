<template>
    <div
        class="flex relative w-full h-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl"
    >
        <Container>
            <ClientOnly>
                <div class="flex flex-col items-center px-4 mb-10">
                    <h2 class="mb-4 text-center text-xl text-black sm:mb-20 sm:text-5xl dark:text-white">
                        Pen your thougths
                    </h2>
                    <VanishingInput
                    v-model="text"
                    :placeholders="placeholders"
                    />
                </div>
            </ClientOnly>
            <div class="grid relative w-full gap-1.5 z-10">
                <Textarea id="message" placeholder="Your output message." />
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
    const placeholders = [
        "AI-generated startup concepts",
        "Innovative marketing campaign ideas",
        "Creative project suggestions powered by AI",
        "AI-driven business model proposals",
        "AI-enhanced product development strategies",
    ];
    const text = ref("");
    const isDark = computed(() => useColorMode().value == "dark");
</script>