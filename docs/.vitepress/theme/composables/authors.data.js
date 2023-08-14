import { createContentLoader } from 'vitepress'
import Config from "../../config.js";

const blogConfig = Config.themeConfig?.blog;

const pattern = `${blogConfig?.authorsPath ?? '/blog/authors'}/**/*.md`

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        name: frontmatter.name,
        avatar: frontmatter.avatar ?? null,
        gravatar: frontmatter.gravatar ?? null,
        twitter: frontmatter.twitter ?? null,
        url,
        excerpt,
      }))
      .sort((a, b) => a.name.localeCompare(b.name))
  },
})
