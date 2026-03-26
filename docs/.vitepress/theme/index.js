// https://vitepress.dev/guide/custom-theme

import { VPBTheme } from '@chunge16/vitepress-blogs-theme';
import { watchEffect } from 'vue';
import { inBrowser, useData } from 'vitepress';
import { syncLanguageCookie } from './utils/cookies.js';
import './style.css';

export default {
  extends: VPBTheme,
  setup() {
    const { lang } = useData();

    watchEffect(() => {
      if (!inBrowser) {
        return;
      }

      syncLanguageCookie(lang.value);
    });
  },
};
