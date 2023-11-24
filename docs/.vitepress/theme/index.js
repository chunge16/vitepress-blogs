// https://vitepress.dev/guide/custom-theme

import {VPBTheme} from "../../../vitepress-blogs-theme/theme";
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
export default {
    ...VPBTheme,
    setup() {
        // 获取前言和路由
        const { frontmatter } = useData();
        const route = useRoute();

        // 评论组件 - https://giscus.app/
        giscusTalk({
                repo: 'chunge16/vitepress-blogs',
                repoId: 'R_kgDOKFcWWg',
                category: 'General',
                categoryId: 'DIC_kwDOKFcWWs4Cav-W',
                mapping: 'pathname', // default: `pathname`
                inputPosition: 'top', // default: `top`
                lang: 'zh-CN', // default: `zh-CN`
                lightTheme: 'light', // 默认: `light`
                darkTheme: 'transparent_dark', // 默认: `transparent_dark`
            }, {
                frontmatter, route
            },
            // 是否全部页面启动评论区。
            // 默认为 true，表示启用，此参数可忽略；
            // 如果为 false，表示不启用。
            // 可以在页面使用 `comment: true` 前言单独启用
            true
        );
    }
};

