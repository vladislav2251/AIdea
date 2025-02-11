<template>
    <header id="header" class="sticky top-0 z-40 transition-colors duration-500 bg-background/80 backdrop-blur-lg">
        <Container>
            <div class="w-full p-2">
                <div class="grid grid-cols-2 lg:grid-cols-3">
                    <div class="flex items-center max-lg:hidden">
                        <NuxtLink to="/" title="Navigation Home" class="flex">
                            <img src="@/public/logo.png" alt="Logo Icon" class="w-7 h-7">
                            <span class="ml-3 self-center font-bold">AIdea</span>
                        </NuxtLink>
                    </div>
                    
                </div>
            </div>
        </Container>
    </header>
</template>