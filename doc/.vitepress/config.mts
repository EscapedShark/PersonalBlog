import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({


  title: "EscapedShark's Blog",
  description: "Record what's worth recording.",
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Articles', link: '/articles/vitepress-tailscale-overview.md' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EscapedShark' },
      { icon: 'gmail', link: 'mailto:peidongliu2000@gmail.com' },
      //{ icon: 'twitter', link: 'https://x.com/MaybeN_onsense' },
      { icon: 'wechat', link: '/wechat.jpg' },
      { icon: 'discord', link: 'https://discordapp.com/users/1159047451253166154' }
    ]
  }
})
