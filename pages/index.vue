<template>
    <Hero />
</template>
<script setup lang="ts">
useHead({
    title: 'AIdea',
    meta: [
        { name: 'description', content: 'Talk to an AI that never sleeps, always responds, and sometimes makes more sense than humans.' },
        { name: 'keywords', content: 'AI chatbot, conversational AI, chat with AI, AI assistant, smart chatbot, GPT chat' },
        { name: 'author', content: 'AIdea' },
        { name: 'robots', content: 'index, follow' },

        { property: 'og:title', content: 'AIdea - Your Smartest Chat Buddy' },
        { property: 'og:description', content: 'Talk to an AI that never sleeps, always responds, and sometimes makes more sense than humans.' },
        { property: 'og:url', content: 'http://localhost:3000' },
        { property: 'og:type', content: 'website' },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AIdea - Chat with AI' },
        { name: 'twitter:description', content: 'Talk to an AI that never sleeps, always responds, and sometimes makes more sense than humans.' },
        { name: 'twitter:image', content: 'http://localhost:3000/twitter-image.jpg' },
    ],
});

    import Hero from './components/hero.vue';
</script>

