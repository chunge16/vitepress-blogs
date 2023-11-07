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
                category: 'Announcements', // 默认: `General`
                categoryId: 'IC_kwDOKFcWWs4Cav-V',
                mapping: 'pathname', // 默认: `pathname`
                inputPosition: 'top', // 默认: `top`
                lang: 'zh-CN', // 默认: `zh-CN`
                // ...
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

