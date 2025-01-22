import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  //outDir: '../dist',
  srcDir: '../doc',

  title: "EscapedShark's Blog",
  description: "Record what's worth recording.",
  appearance: 'dark',
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      
      { text: 'Tools', 
        items: [
          //{ text: 'Git', link: '/item-1' },
          { text: 'Markdown', link: '/Tools_docs/Markdown/markdown-guide.md' }
          //{ text: 'Vim', link: '/item-3' },
          //{ text: 'Docker', link: '/item-4' },
          //{ text: 'Latex', link: '/item-5' }
        ]
       },

      {
        text: 'Coding',
        items: [
          { text: 'Web开发', link: '/Coding_docs/Web开发/vitepress-tailscale-overview.md' },
          //{ text: '量化学习', link: '/Coding_docs/' },
          //{ text: '机器学习', link: '/Coding_docs/' },
          { text: '算法学习', link: '/Coding_docs/算法学习/哈希.md' }
          //{ text: 'Linux知识', link: '/Coding_docs/' },
          //{ text: '网络知识', link: '/Coding_docs/' }
        ]
      }
    ],

    sidebar: {
      '/Coding_docs/Web开发/': [
        {
          text: 'Web开发',
          items: [
            { text: 'vitepress-tailscale-overview', link: '/Coding_docs/Web开发/vitepress-tailscale-overview.md' }

        
      ]
    }
  ],
      '/Coding_docs/算法学习/': [
        {
          text: '算法学习',
          items: [
            { text: '哈希', link: '/Coding_docs/算法学习/哈希.md' }

          ]
        }
      ],

      '/Tools_docs/Markdown/': [
        {
          text: 'Markdown',
          items: [
            { text: 'Markdown基础', link: '/Tools_docs/Markdown/markdown-guide.md' },
            { text: 'Markdown例子', link: '/Tools_docs/Markdown/markdown-examples.md' }
          ]
        }
      ]
  },

  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EscapedShark' },
      { icon: 'gmail', link: 'mailto:peidongliu2000@gmail.com' },
      //{ icon: 'twitter', link: 'https://x.com/MaybeN_onsense' },
      { icon: 'wechat', link: '/wechat.jpg' },
      { icon: 'discord', link: 'https://discordapp.com/users/1159047451253166154' }
    ]
  }
})
