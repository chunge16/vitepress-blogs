// https://vitepress.dev/guide/custom-theme

import {VPBTheme} from "@chunge16/vitepress-blogs-theme";
import {watchEffect} from "vue";
import {inBrowser, useData} from "vitepress";
export default {
    extends: VPBTheme,
    setup() {
        const { lang } = useData();
        watchEffect(() => {
            if (inBrowser) {
                document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2024 00:00:00 UTC; path=/`;
            }
        });
    }
};

