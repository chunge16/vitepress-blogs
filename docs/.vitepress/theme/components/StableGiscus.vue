<template>
  <div v-if="isShowGiscus" class="giuscus-wrap">
    <Giscus
      :id="defaultProps.id"
      :repo="giscus?.repo"
      :repoId="giscus?.repoId"
      :categoryId="giscus?.categoryId"
      :category="giscus?.category ?? defaultProps.category"
      :mapping="resolvedMapping"
      :term="resolvedTerm"
      :reactionsEnabled="giscus?.reactionsEnabled ?? defaultProps.reactionsEnabled"
      :emitMetadata="giscus?.emitMetadata ?? defaultProps.emitMetadata"
      :inputPosition="giscus?.inputPosition ?? defaultProps.inputPosition"
      :theme="defaultProps.theme"
      :lang="giscus?.lang ?? defaultProps.lang"
      :loading="giscus?.loading ?? defaultProps.loading"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useData } from 'vitepress';
import Giscus from '@giscus/vue';

const { theme, isDark, frontmatter, page } = useData();
const giscus = computed(() => theme.value.blog?.giscus);
const lightTheme = computed(() => giscus.value?.lightTheme || 'light');
const darkTheme = computed(() => giscus.value?.darkTheme || 'transparent_dark');

const defaultProps = ref({
  id: 'comments',
  category: 'General',
  mapping: 'specific',
  reactionsEnabled: '1',
  inputPosition: 'top',
  lang: 'zh-CN',
  loading: 'lazy',
  emitMetadata: '0',
  theme: isDark.value ? darkTheme.value : lightTheme.value,
});

const resolvedTerm = computed(() => frontmatter.value.commentId || page.value.relativePath);
const resolvedMapping = computed(() => {
  if (frontmatter.value.commentId) {
    return 'specific';
  }

  return giscus.value?.mapping ?? defaultProps.value.mapping;
});

const isShowGiscus = computed(() => {
  const defaultEnable = typeof giscus.value?.defaultEnable === 'boolean' ? giscus.value.defaultEnable : true;
  const comment = frontmatter.value.comment;

  if (typeof comment === 'boolean') {
    return comment;
  }

  return defaultEnable;
});

watch(isDark, () => {
  defaultProps.value.theme = isDark.value ? darkTheme.value : lightTheme.value;
});
</script>

<style scoped>
.giuscus-wrap {
  width: 100%;
  height: auto;
  margin-top: 40px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 20px;
}
</style>
<style>
@reference "../style.css";
</style>
