// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import VPBHome from './components/VPBHome.vue'
import VPBLayout from './components/VPBLayout.vue'
import VPBArchives from './components/VPBArchives.vue'
import VPBTags from './components/VPBTags.vue'
import VPBTestComponent from './components/VPBTestComponent.vue'
import VPBHomePost from './components/VPBHomePost.vue'

import './style.css'

export default {
  ...DefaultTheme,
  Layout: VPBLayout,
  enhanceApp({ app, router, siteData }) {
    DefaultTheme.enhanceApp({ app, router, siteData })
    app.component('VPBHome', VPBHome)
    app.component('VPBArchives', VPBArchives)
    app.component('VPBTags', VPBTags)
    app.component('VPBTestComponent', VPBTestComponent)
    app.component('VPBHomePost', VPBHomePost)
  }
}
