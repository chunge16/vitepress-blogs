// docs/.vitepress/config.js
import { defineConfig } from "file:///Users/shi/Desktop/project/vitepress-blogs/node_modules/.pnpm/vitepress@1.0.0-rc.4_@algolia+client-search@4.19.1_@types+node@20.4.7_search-insights@2.7.0/node_modules/vitepress/dist/node/index.js";

// vitepress-blogs-theme/config/index.js
import icons from "file:///Users/shi/Desktop/project/vitepress-blogs/vitepress-blogs-theme/node_modules/.pnpm/@jcamp+tailwindcss-plugin-icons@0.6.2_tailwindcss@3.3.3/node_modules/@jcamp/tailwindcss-plugin-icons/dist/index.js";
async function processData(pageData, ctx, aside = "left", sidebar = false) {
  var _a, _b, _c, _d;
  const config = (_b = (_a = ctx == null ? void 0 : ctx.siteConfig) == null ? void 0 : _a.site) == null ? void 0 : _b.themeConfig;
  const postsPattern = ((_c = config.blog) == null ? void 0 : _c.postsPath) ?? "blog/posts";
  const authorsPattern = ((_d = config.blog) == null ? void 0 : _d.authorsPath) ?? "blog/authors";
  if (pageData.relativePath.includes(postsPattern)) {
    pageData.frontmatter.blog = "post";
    pageData.frontmatter.aside = aside;
    pageData.frontmatter.sidebar = sidebar;
    pageData.frontmatter.prev = false;
    pageData.frontmatter.next = false;
  }
  if (pageData.relativePath.includes(authorsPattern)) {
    pageData.frontmatter.blog = "author";
    pageData.frontmatter.aside = aside;
    pageData.frontmatter.sidebar = sidebar;
    pageData.frontmatter.prev = false;
    pageData.frontmatter.next = false;
  }
}

// docs/.vitepress/config.js
var config_default = defineConfig({
  base: "/vitepress-blogs/",
  cleanUrls: true,
  title: "\u6625\u54E5\u7684\u535A\u5BA2",
  description: "\u884C\u5230\u6C34\u7A77\u5904\uFF0C\u5750\u770B\u4E91\u8D77\u65F6",
  head: [
    ["link", { rel: "icon", href: "/cat-with-wry-smile.svg" }]
  ],
  themeConfig: {
    logo: "/cat-with-wry-smile.svg",
    lastUpdated: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "\u968F\u7B14",
        link: "/casualEssay/RollingStoneLoveStory",
        activeMatch: "/casualEssay/"
      },
      {
        text: "\u535A\u5BA2",
        activeMatch: "/blog/",
        items: [
          {
            text: "\u535A\u5BA2\u9996\u9875",
            link: "/blog/",
            activeMatch: "/blog/$"
          },
          {
            text: "\u6807\u7B7E",
            link: "/blog/tags",
            activeMatch: "/blog/tags"
          },
          {
            text: "\u6863\u6848",
            link: "/blog/archives",
            activeMatch: "/blog/archives"
          }
          // {
          //   text: 'RSS Feed',
          //   link: '/blog/feed.rss',
          // },
        ]
      }
    ],
    sidebar: {
      "/casualEssay/": sidebarCasualEssay()
    },
    blog: {
      title: "Blog",
      description: "All these articles were written by chunge!",
      defaultAuthor: "chunge",
      categoryIcons: {
        article: "i-[carbon/notebook]",
        tutorial: "i-[carbon/book]",
        document: "i-[carbon/document]"
      },
      tagIcons: {
        github: "i-[carbon/logo-github]",
        vue: "i-[logos/vue]",
        javascript: "i-[logos/javascript]",
        "web development": "i-[carbon/development]",
        html: "i-[logos/html-5]",
        git: "i-[logos/git-icon]",
        vite: "i-[logos/vitejs]"
      }
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/chunge16/vitepress-blogs/tree/main/vitepress-blogs-theme" }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2023-present chunge"
    }
  },
  vite: {
    optimizeDeps: {
      exclude: ["@chunge16/vitepress-blogs-theme"]
    }
  },
  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  }
});
function sidebarCasualEssay() {
  return [
    {
      text: "\u6EDA\u77F3\u7231\u60C5\u6545\u4E8B\u96C6",
      collapsed: false,
      items: [
        {
          text: "\u6EDA\u77F3\u7231\u60C5\u6545\u4E8B",
          link: "/casualEssay/RollingStoneLoveStory"
        }
      ]
    }
  ];
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5qcyIsICJ2aXRlcHJlc3MtYmxvZ3MtdGhlbWUvY29uZmlnL2luZGV4LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NoaS9EZXNrdG9wL3Byb2plY3Qvdml0ZXByZXNzLWJsb2dzL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NoaS9EZXNrdG9wL3Byb2plY3Qvdml0ZXByZXNzLWJsb2dzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NoaS9EZXNrdG9wL3Byb2plY3Qvdml0ZXByZXNzLWJsb2dzL2RvY3MvLnZpdGVwcmVzcy9jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHtwcm9jZXNzRGF0YX0gZnJvbSAnLi4vLi4vdml0ZXByZXNzLWJsb2dzLXRoZW1lL2NvbmZpZy9pbmRleC5qcydcbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IFwiL3ZpdGVwcmVzcy1ibG9ncy9cIixcbiAgY2xlYW5VcmxzOiB0cnVlLFxuICB0aXRsZTogXCJcdTY2MjVcdTU0RTVcdTc2ODRcdTUzNUFcdTVCQTJcIixcbiAgZGVzY3JpcHRpb246IFwiXHU4ODRDXHU1MjMwXHU2QzM0XHU3QTc3XHU1OTA0XHVGRjBDXHU1NzUwXHU3NzBCXHU0RTkxXHU4RDc3XHU2NUY2XCIsXG4gIGhlYWQ6IFtcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2NhdC13aXRoLXdyeS1zbWlsZS5zdmcnIH1dLFxuICBdLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGxvZ286ICcvY2F0LXdpdGgtd3J5LXNtaWxlLnN2ZycsXG4gICAgbGFzdFVwZGF0ZWQ6IHRydWUsXG4gICAgLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9kZWZhdWx0LXRoZW1lLWNvbmZpZ1xuICAgIG5hdjogW1xuICAgICAgeyB0ZXh0OiAnSG9tZScsIGxpbms6ICcvJyB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAnXHU5NjhGXHU3QjE0JyxcbiAgICAgICAgbGluazogJy9jYXN1YWxFc3NheS9Sb2xsaW5nU3RvbmVMb3ZlU3RvcnknLFxuICAgICAgICBhY3RpdmVNYXRjaDogJy9jYXN1YWxFc3NheS8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ1x1NTM1QVx1NUJBMicsXG4gICAgICAgIGFjdGl2ZU1hdGNoOiAnL2Jsb2cvJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiAnXHU1MzVBXHU1QkEyXHU5OTk2XHU5ODc1JyxcbiAgICAgICAgICAgIGxpbms6ICcvYmxvZy8nLFxuICAgICAgICAgICAgYWN0aXZlTWF0Y2g6ICcvYmxvZy8kJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTY4MDdcdTdCN0UnLFxuICAgICAgICAgICAgbGluazogJy9ibG9nL3RhZ3MnLFxuICAgICAgICAgICAgYWN0aXZlTWF0Y2g6ICcvYmxvZy90YWdzJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6ICdcdTY4NjNcdTY4NDgnLFxuICAgICAgICAgICAgbGluazogJy9ibG9nL2FyY2hpdmVzJyxcbiAgICAgICAgICAgIGFjdGl2ZU1hdGNoOiAnL2Jsb2cvYXJjaGl2ZXMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgdGV4dDogJ1JTUyBGZWVkJyxcbiAgICAgICAgICAvLyAgIGxpbms6ICcvYmxvZy9mZWVkLnJzcycsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAnL2Nhc3VhbEVzc2F5Lyc6IHNpZGViYXJDYXN1YWxFc3NheSgpLFxuICAgIH0sXG4gICAgYmxvZzoge1xuICAgICAgdGl0bGU6ICdCbG9nJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQWxsIHRoZXNlIGFydGljbGVzIHdlcmUgd3JpdHRlbiBieSBjaHVuZ2UhJyxcbiAgICAgIGRlZmF1bHRBdXRob3I6ICdjaHVuZ2UnLFxuICAgICAgY2F0ZWdvcnlJY29uczoge1xuICAgICAgICBhcnRpY2xlOiAnaS1bY2FyYm9uL25vdGVib29rXScsXG4gICAgICAgIHR1dG9yaWFsOiAnaS1bY2FyYm9uL2Jvb2tdJyxcbiAgICAgICAgZG9jdW1lbnQ6ICdpLVtjYXJib24vZG9jdW1lbnRdJyxcbiAgICAgIH0sXG4gICAgICB0YWdJY29uczoge1xuICAgICAgICBnaXRodWI6ICdpLVtjYXJib24vbG9nby1naXRodWJdJyxcbiAgICAgICAgdnVlOiAnaS1bbG9nb3MvdnVlXScsXG4gICAgICAgIGphdmFzY3JpcHQ6ICdpLVtsb2dvcy9qYXZhc2NyaXB0XScsXG4gICAgICAgICd3ZWIgZGV2ZWxvcG1lbnQnOiAnaS1bY2FyYm9uL2RldmVsb3BtZW50XScsXG4gICAgICAgIGh0bWw6ICdpLVtsb2dvcy9odG1sLTVdJyxcbiAgICAgICAgZ2l0OiAnaS1bbG9nb3MvZ2l0LWljb25dJyxcbiAgICAgICAgdml0ZTogJ2ktW2xvZ29zL3ZpdGVqc10nXG4gICAgICB9LFxuICAgIH0sXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vY2h1bmdlMTYvdml0ZXByZXNzLWJsb2dzL3RyZWUvbWFpbi92aXRlcHJlc3MtYmxvZ3MtdGhlbWUnIH1cbiAgICBdLFxuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDIzLXByZXNlbnQgY2h1bmdlJ1xuICAgIH1cbiAgfSxcbiAgdml0ZToge1xuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgZXhjbHVkZTogWydAY2h1bmdlMTYvdml0ZXByZXNzLWJsb2dzLXRoZW1lJ10sXG4gICAgfSxcbiAgfSxcbiAgYXN5bmMgdHJhbnNmb3JtUGFnZURhdGEocGFnZURhdGEsIGN0eCkge1xuICAgIGF3YWl0IHByb2Nlc3NEYXRhKHBhZ2VEYXRhLCBjdHgpXG4gIH0sXG59KVxuXG5cbmZ1bmN0aW9uIHNpZGViYXJDYXN1YWxFc3NheSgpe1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHRleHQ6ICdcdTZFREFcdTc3RjNcdTcyMzFcdTYwQzVcdTY1NDVcdTRFOEJcdTk2QzYnLFxuICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU2RURBXHU3N0YzXHU3MjMxXHU2MEM1XHU2NTQ1XHU0RThCJyxcbiAgICAgICAgICBsaW5rOiAnL2Nhc3VhbEVzc2F5L1JvbGxpbmdTdG9uZUxvdmVTdG9yeScsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9zaGkvRGVza3RvcC9wcm9qZWN0L3ZpdGVwcmVzcy1ibG9ncy92aXRlcHJlc3MtYmxvZ3MtdGhlbWUvY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2hpL0Rlc2t0b3AvcHJvamVjdC92aXRlcHJlc3MtYmxvZ3Mvdml0ZXByZXNzLWJsb2dzLXRoZW1lL2NvbmZpZy9pbmRleC5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvc2hpL0Rlc2t0b3AvcHJvamVjdC92aXRlcHJlc3MtYmxvZ3Mvdml0ZXByZXNzLWJsb2dzLXRoZW1lL2NvbmZpZy9pbmRleC5qc1wiO2ltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBpY29ucyBmcm9tICdAamNhbXAvdGFpbHdpbmRjc3MtcGx1Z2luLWljb25zJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc0RhdGEoXG4gICAgcGFnZURhdGEsXG4gICAgY3R4LFxuICAgIGFzaWRlID0gJ2xlZnQnLFxuICAgIHNpZGViYXIgPSBmYWxzZVxuKSB7XG4gICAgY29uc3QgY29uZmlnID0gY3R4Py5zaXRlQ29uZmlnPy5zaXRlPy50aGVtZUNvbmZpZztcbiAgICBjb25zdCBwb3N0c1BhdHRlcm4gPSBjb25maWcuYmxvZz8ucG9zdHNQYXRoID8/ICdibG9nL3Bvc3RzJ1xuICAgIGNvbnN0IGF1dGhvcnNQYXR0ZXJuID0gY29uZmlnLmJsb2c/LmF1dGhvcnNQYXRoID8/ICdibG9nL2F1dGhvcnMnXG5cbiAgICBpZiAocGFnZURhdGEucmVsYXRpdmVQYXRoLmluY2x1ZGVzKHBvc3RzUGF0dGVybikpIHtcbiAgICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIuYmxvZyA9ICdwb3N0J1xuICAgICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5hc2lkZSA9IGFzaWRlXG4gICAgICAgIHBhZ2VEYXRhLmZyb250bWF0dGVyLnNpZGViYXIgPSBzaWRlYmFyXG4gICAgICAgIHBhZ2VEYXRhLmZyb250bWF0dGVyLnByZXYgPSBmYWxzZVxuICAgICAgICBwYWdlRGF0YS5mcm9udG1hdHRlci5uZXh0ID0gZmFsc2VcbiAgICB9XG4gICAgaWYgKHBhZ2VEYXRhLnJlbGF0aXZlUGF0aC5pbmNsdWRlcyhhdXRob3JzUGF0dGVybikpIHtcbiAgICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIuYmxvZyA9ICdhdXRob3InXG4gICAgICAgIHBhZ2VEYXRhLmZyb250bWF0dGVyLmFzaWRlID0gYXNpZGVcbiAgICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIuc2lkZWJhciA9IHNpZGViYXJcbiAgICAgICAgcGFnZURhdGEuZnJvbnRtYXR0ZXIucHJldiA9IGZhbHNlXG4gICAgICAgIHBhZ2VEYXRhLmZyb250bWF0dGVyLm5leHQgPSBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IHRhaWx3aW5kVGhlbWVDb250ZW50ID1cbiAgICAnLi9ub2RlX21vZHVsZXMvQGNodW5nZTE2L3ZpdGVwcmVzcy1ibG9ncy10aGVtZS90aGVtZS8qKi8qLntqcyx0cyx2dWV9J1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lVGFpbHdpbmRDb250ZW50KGJhc2UgPSAnLi9kb2NzJykge1xuICAgIHJldHVybiBbXG4gICAgICAgIHRhaWx3aW5kVGhlbWVDb250ZW50LFxuICAgICAgICBwYXRoLmpvaW4oYmFzZSwgJyoqLyoubWQnKSxcbiAgICAgICAgcGF0aC5qb2luKGJhc2UsICcudml0ZXByZXNzLyoqLyoue2pzLHRzLHZ1ZX0nKSxcbiAgICBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVUYWlsd2luZENvbmZpZyhiYXNlID0gJy4vZG9jcycsIGNvbmZpZykge1xuICAgIGlmIChiYXNlID09PSBudWxsIHx8IGJhc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBiYXNlID0gJy4vZG9jcydcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGFya01vZGU6ICdjbGFzcycsXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgaWNvbnMgd29ya3Mgb25jZSB0cmFuc3BpbGVkXG4gICAgICAgIHBsdWdpbnM6IFtpY29ucygpXSxcbiAgICAgICAgY29udGVudDogZGVmaW5lVGFpbHdpbmRDb250ZW50KGJhc2UpLFxuICAgICAgICAuLi5jb25maWcsXG4gICAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzVixTQUFTLG9CQUFvQjs7O0FDQ25YLE9BQU8sV0FBVztBQUVsQixlQUFzQixZQUNsQixVQUNBLEtBQ0EsUUFBUSxRQUNSLFVBQVUsT0FDWjtBQVJGO0FBU0ksUUFBTSxVQUFTLHNDQUFLLGVBQUwsbUJBQWlCLFNBQWpCLG1CQUF1QjtBQUN0QyxRQUFNLGlCQUFlLFlBQU8sU0FBUCxtQkFBYSxjQUFhO0FBQy9DLFFBQU0sbUJBQWlCLFlBQU8sU0FBUCxtQkFBYSxnQkFBZTtBQUVuRCxNQUFJLFNBQVMsYUFBYSxTQUFTLFlBQVksR0FBRztBQUM5QyxhQUFTLFlBQVksT0FBTztBQUM1QixhQUFTLFlBQVksUUFBUTtBQUM3QixhQUFTLFlBQVksVUFBVTtBQUMvQixhQUFTLFlBQVksT0FBTztBQUM1QixhQUFTLFlBQVksT0FBTztBQUFBLEVBQ2hDO0FBQ0EsTUFBSSxTQUFTLGFBQWEsU0FBUyxjQUFjLEdBQUc7QUFDaEQsYUFBUyxZQUFZLE9BQU87QUFDNUIsYUFBUyxZQUFZLFFBQVE7QUFDN0IsYUFBUyxZQUFZLFVBQVU7QUFDL0IsYUFBUyxZQUFZLE9BQU87QUFDNUIsYUFBUyxZQUFZLE9BQU87QUFBQSxFQUNoQztBQUNKOzs7QUR4QkEsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sV0FBVztBQUFBLEVBQ1gsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsTUFBTTtBQUFBLElBQ0osQ0FBQyxRQUFRLEVBQUUsS0FBSyxRQUFRLE1BQU0sMEJBQTBCLENBQUM7QUFBQSxFQUMzRDtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBO0FBQUEsSUFFYixLQUFLO0FBQUEsTUFDSCxFQUFFLE1BQU0sUUFBUSxNQUFNLElBQUk7QUFBQSxNQUMxQjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLE1BQ2Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFBLFlBQ04sYUFBYTtBQUFBLFVBQ2Y7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsWUFDTixhQUFhO0FBQUEsVUFDZjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLGFBQWE7QUFBQSxVQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLGlCQUFpQixtQkFBbUI7QUFBQSxJQUN0QztBQUFBLElBQ0EsTUFBTTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLE1BQ2IsZUFBZTtBQUFBLE1BQ2YsZUFBZTtBQUFBLFFBQ2IsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1YsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxRQUNMLFlBQVk7QUFBQSxRQUNaLG1CQUFtQjtBQUFBLFFBQ25CLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNSO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSw4RUFBOEU7QUFBQSxJQUN4RztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsaUNBQWlDO0FBQUEsSUFDN0M7QUFBQSxFQUNGO0FBQUEsRUFDQSxNQUFNLGtCQUFrQixVQUFVLEtBQUs7QUFDckMsVUFBTSxZQUFZLFVBQVUsR0FBRztBQUFBLEVBQ2pDO0FBQ0YsQ0FBQztBQUdELFNBQVMscUJBQW9CO0FBQzNCLFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixXQUFXO0FBQUEsTUFDWCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
