// https://vitepress.dev/guide/custom-theme

import { VPBTheme } from '@chunge16/vitepress-blogs-theme';
import { watchEffect } from 'vue';
import { inBrowser, useData } from 'vitepress';
import './style.css';

export default {
  extends: VPBTheme,
  setup() {
    const { lang } = useData();

    watchEffect(() => {
      if (!inBrowser) {
        return;
      }

      document.cookie = `nf_lang=${lang.value}; max-age=31536000; path=/`;
    });
  },
};
