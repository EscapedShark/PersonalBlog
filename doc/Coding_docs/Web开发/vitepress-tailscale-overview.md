# VitePress博客搭建与远程开发概述

## 技术栈选择

- **VitePress**: 基于 Vue 的静态站点生成器，专注于技术文档和博客
- **Ubuntu Server**: 作为博客的部署环境
- **Tailscale**: 构建安全的远程开发环境
- **Cloudflare Tunnel**: 将本地服务暴露到公网

## 开发环境搭建

1. 在本地和服务器上安装 Tailscale，构建安全的虚拟网络
2. 通过 Tailscale 网络直接访问家庭服务器，注意要打开Tailscale SSH
3. 使用 VS Code Remote SSH 插件进行远程开发
4. 在服务器安装 cloudflared 详情参考：https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-local-tunnel/
5. 进行vitepress安装 详情参考：https://vitepress.dev/guide/getting-started
6. 如果您对主题有自定义的需求，请同时安装VUE

## 博客部署流程

1. 在服务器上初始化 VitePress 项目
2. 配置基本的博客结构和主题
3. 构建文档（使用pm2可以避免网站随着SSH终端停止运行时结束）
```shell
pm2 start "npm run docs:build" --name docs-build --no-autorestart
```
4. 启动预览服务器
```shell
pm2 start "npx vitepress preview doc --port 5173" --name docs-preview
```
5. 使用 Cloudflare Tunnel 将服务暴露到公网


## 优势

- 无需公网IP也能远程开发
- 安全的私有网络环境
- 随时随地都能更新博客内容
- 低成本高效率的部署方案
