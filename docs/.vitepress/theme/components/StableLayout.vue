<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { VPBLayoutAuthorAsideBottom, VPBLayoutAuthorTop, VPBLayoutPostAsideBottom, VPBLayoutPostAsideTop, VPBLayoutPostBottom, VPBLayoutPostTop } from '@chunge16/vitepress-blogs-theme';
import StableGiscus from './StableGiscus.vue';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-before>
      <VPBLayoutPostTop v-if="frontmatter.blog === 'post'" />
      <VPBLayoutAuthorTop v-if="frontmatter.blog === 'author'" />
    </template>
    <template #doc-after>
      <StableGiscus v-if="frontmatter.blog === 'post'" />
    </template>
    <template #doc-footer-before>
      <VPBLayoutPostBottom v-if="frontmatter.blog === 'post'" />
    </template>
    <template #aside-top>
      <VPBLayoutPostAsideTop v-if="frontmatter.blog === 'post'" />
    </template>
    <template #aside-bottom>
      <VPBLayoutPostAsideBottom v-if="frontmatter.blog === 'post'" />
      <VPBLayoutAuthorAsideBottom v-if="frontmatter.blog === 'author'" />
    </template>
  </Layout>
</template>

<style>
@reference "../style.css";
</style>
