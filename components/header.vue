<script setup lang="ts">
import { buttonVariants } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { LucideGithub, LucideMenu } from 'lucide-vue-next';

interface IProps {
    title: string;
    href: string;
    description: string;
};

const components: IProps[] = [
    {
        title: 'GitHub',
        description: 'Check out my latest code and projects.',
        href: 'https://github.com/vladislav2251',
    },
    {
        title: 'LinkedIn',
        description: 'Connect with me professionally.',
        href: 'https://www.linkedin.com/in/vlad-didyk-2842a8269/',
    },
    {
        title: 'Portfolio',
        description: 'Explore my work and designs.',
        href: 'https://vladdidyk.vercel.app',
    },
];
</script>
<template>
    <header id="header" class="sticky top-0 z-40 transition-colors duration-500 bg-background/80 backdrop-blur-lg">
        <Container>
            <div class="w-full p-2">
                <div class="grid grid-cols-2 lg:grid-cols-3">
                    <div class="flex items-center max-lg:hidden">
                        <NuxtLink to="/" title="Navigation Home" class="flex">
                            <img src="@/public/logo.svg" alt="Logo Icon" class="w-7 h-7">
                            <span class="ml-3 self-center font-bold">AIdea</span>
                        </NuxtLink>
                    </div>
                    <NavigationMenu class="lg:flex mx-auto hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]">
                                        <li class="row-span-3">
                                            <NavigationMenuLink as-child>
                                                <NuxtLink
                                                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <img src="@/public/logo.svg" class="h-6 w-6">
                                                    <div class="mb-2 mt-4 text-lg font-medium">
                                                        AIdea
                                                    </div>
                                                    <p class="text-sm leading-tight text-muted-foreground">
                                                        AI analyzes user input to generate creative project ideas.
                                                    </p>
                                                </NuxtLink>
                                            </NavigationMenuLink>
                                        </li>

                                        <li v-for="component in components" :key="component.title">
                                            <NavigationMenuLink as-child>
                                                <a
                                                    :href="component.href"
                                                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                >
                                                    <div class="text-sm font-medium leading-none">{{ component.title }}</div>
                                                    <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        {{ component.description }}
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NuxtLink :class="cn(navigationMenuTriggerStyle())" :to="{ hash: '#about', path: '/' }">
                                    About
                                </NuxtLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div class="lg:hidden flex items-center">
                        <MobileNavigation>
                            <Button id="menu" variant="ghost" size="icon">
                                <LucideMenu class="!size-[18px]" />
                                <span class="hidden">menu</span>
                            </Button>
                        </MobileNavigation>
                    </div>

                    <div class="flex items-center justify-end">
                        <a id="github" title="GitHub" href="https://github.com/vladislav2251/AIdea" :class="cn(buttonVariants({ variant: 'ghost', size: 'icon' }))" rel="noopener noreferrer" target="_blank" variant="ghost" size="icon">
                            <LucideGithub class="!size-[18px]" />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    </header>
</template>