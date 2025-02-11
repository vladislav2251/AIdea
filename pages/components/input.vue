<template>
    <div
        class="relative flex w-full h-screen flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl"
    >
        <Container>
            <ClientOnly>
                <div class="flex h-[15rem] flex-col items-center px-4">
                    <h2 class="mb-4 text-center text-xl text-black sm:mb-20 sm:text-5xl dark:text-white">
                        Pen your thougths
                    </h2>
                    <VanishingInput
                    v-model="text"
                    :placeholders="placeholders"
                    />
                </div>
            </ClientOnly>
            <textarea
                class="relative flex h-[500px] focus:border-none z-50 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
            >
                
            </textarea>
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