import{_ as l,c as a,ae as i,o as r}from"./chunks/framework.CVnNJfIj.js";const p=JSON.parse('{"title":"VitePress博客搭建与远程开发概述","description":"","frontmatter":{},"headers":[],"relativePath":"articles/vitepress-tailscale-overview.md","filePath":"articles/vitepress-tailscale-overview.md"}'),t={name:"articles/vitepress-tailscale-overview.md"};function s(o,e,n,c,d,u){return r(),a("div",null,e[0]||(e[0]=[i('<h1 id="vitepress博客搭建与远程开发概述" tabindex="-1">VitePress博客搭建与远程开发概述 <a class="header-anchor" href="#vitepress博客搭建与远程开发概述" aria-label="Permalink to &quot;VitePress博客搭建与远程开发概述&quot;">​</a></h1><h2 id="技术栈选择" tabindex="-1">技术栈选择 <a class="header-anchor" href="#技术栈选择" aria-label="Permalink to &quot;技术栈选择&quot;">​</a></h2><ul><li><strong>VitePress</strong>: 基于 Vue 的静态站点生成器，专注于技术文档和博客</li><li><strong>Ubuntu Server</strong>: 作为博客的部署环境</li><li><strong>Tailscale</strong>: 构建安全的远程开发环境</li><li><strong>Cloudflare Tunnel</strong>: 将本地服务暴露到公网</li></ul><h2 id="开发环境搭建" tabindex="-1">开发环境搭建 <a class="header-anchor" href="#开发环境搭建" aria-label="Permalink to &quot;开发环境搭建&quot;">​</a></h2><ol><li>在本地和服务器上安装 Tailscale，构建安全的虚拟网络</li><li>通过 Tailscale 网络直接访问家庭服务器</li><li>使用 VS Code Remote SSH 插件进行远程开发</li></ol><h2 id="博客部署流程" tabindex="-1">博客部署流程 <a class="header-anchor" href="#博客部署流程" aria-label="Permalink to &quot;博客部署流程&quot;">​</a></h2><ol><li>在服务器上初始化 VitePress 项目</li><li>配置基本的博客结构和主题</li><li>使用 Cloudflare Tunnel 将服务暴露到公网</li><li>配置自动部署脚本</li></ol><h2 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h2><ul><li>无需公网IP也能远程开发</li><li>安全的私有网络环境</li><li>随时随地都能更新博客内容</li><li>低成本高效率的部署方案</li></ul><p>这种方案让你能够在家中搭建一个完整的开发环境，既保证了安全性，又提供了灵活的远程办公能力。通过 Tailscale 进行远程开发，用 Cloudflare Tunnel 实现公网访问，完美解决了没有公网IP的限制。</p>',10)]))}const v=l(t,[["render",s]]);export{p as __pageData,v as default};
