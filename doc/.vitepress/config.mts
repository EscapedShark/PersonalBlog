import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  //outDir: '../dist',
  //srcDir: '../doc',
  srcDir: '.',

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
          { text: '编辑工具', link: '/Tools_docs/编辑工具/vim.md' },
          //{ text: 'Vim', link: '/item-3' },
          //{ text: 'Docker', link: '/item-4' },
          //{ text: 'Latex', link: '/item-5' },
          { text: '家庭服务器', link: '/Tools_docs/家庭服务器/linux_exit-node.md' }
        ]
       },

      {
        text: 'Coding',
        items: [
          { text: 'Web开发', link: '/Coding_docs/Web开发/vitepress-tailscale-overview.md' },
          //{ text: '量化学习', link: '/Coding_docs/' },
          //{ text: '机器学习', link: '/Coding_docs/' },
          { text: '算法学习', link: '/Coding_docs/算法学习/hash/2215.md' },
          { text: '数据库', link: '/Coding_docs/数据库/postgresql-syntax.md' }
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
            {
              text: '哈希',
              items: [ 
                { text: '2215', link: '/Coding_docs/算法学习/Hash/2215.md' }
              ],
            },

            {  
              text: '前缀和',
              items: [ 
                { text: '1732', link: '/Coding_docs/算法学习/PrefixSum/1732.md' }
              ]
            },

            {
              text: '滑动窗口',
              items: [ 
                { text: '643', link: '/Coding_docs/算法学习/SlidingWindow/643.md' }
              ]
            }

            

          ]
        }
      ],

      '/Tools_docs/编辑工具/': [
        {
          text: '编辑工具',
          items: [
            { text: 'Vim小指南', link: '/Tools_docs/编辑工具/vim.md' },
            { text: 'Markdown基础', link: '/Tools_docs/编辑工具/markdown-guide.md' },
            { text: 'Markdown例子', link: '/Tools_docs/编辑工具/markdown-examples.md' }
          ]
        }
      ],

      '/Tools_docs/家庭服务器/': [
        {
          text: '家庭服务器',
          items: [
            { text: ' Tailscale配置出口节点', link: '/Tools_docs/家庭服务器/linux_exit-node.md' },
            { text: ' 家庭服务器的NextCloud设置', link: '/Tools_docs/家庭服务器/nextcloud-guide.md' }

          ]
        }
      ],


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
