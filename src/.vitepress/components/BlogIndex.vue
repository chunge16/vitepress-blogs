<template>
    <div class="container mx-auto flex items-center justify-center" :style="{height: '500px'}">
        <div class="flex -space-x-1 flex-col items-center overflow-hidden">
            <img class="inline-block h-64 w-64 rounded-full ring-2 ring-white" src="/img/cat-with-wry-smile.svg" alt="">
            <div class="nickname text-xl py-2">朋友喜欢叫我春哥</div>
            <p class="font-light text-[color:var(--vp-c-text-light-1)] dark:text-[color:var(--vp-c-text-dark-1)] sm:text-xl">{{description}}</p>
        </div>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';
const theme = useData().theme

const description = theme.value.blog.description;

</script>
<style>
.nickname {
    font-size: 2em;
    padding: 10px 0;
    color: var(--vp-c-text-1);
}
</style>
