
# Vim 编辑指南
![Vim Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Vimlogo.svg/120px-Vimlogo.svg.png)

## 目录
- [安装 Vim](#安装-vim)
- [基本操作](#基本操作)
- [模式介绍](#模式介绍)
- [常用命令速查](#常用命令速查)
- [高级配置与插件](#高级配置与插件)
- [进阶技巧](#进阶技巧)

---

## 安装 Vim
```bash
# Linux (Debian/Ubuntu)
sudo apt-get install vim

# macOS
brew install vim

# Windows
# 下载地址：https://www.vim.org/download.php
```

---

## 基本操作

### 启动与退出
```bash
vim 文件名        # 打开文件
:q               # 退出
:q!              # 强制退出不保存
:wq 或 ZZ        # 保存并退出（ZZ是快捷键）
```

### 模式切换
| 操作               | 效果               |
|--------------------|--------------------|
| `i`                | 进入插入模式       |
| `Esc`              | 返回普通模式       |
| `v`                | 进入可视模式       |
| `:`                | 进入命令行模式     |

---

## 常用命令速查

### 移动光标
| 命令   | 功能               |
|--------|--------------------|
| `h/j/k/l` | 左/下/上/右移动    |
| `gg`   | 跳转到文件首       |
| `G`    | 跳转到文件尾       |
| `0`    | 跳转到行首         |
| `$`    | 跳转到行尾         |
| `Ctrl+f` | 向下翻页          |
| `Ctrl+b` | 向上翻页          |

### 编辑操作
| 命令       | 功能               |
|------------|--------------------|
| `dd`       | 删除当前行         |
| `yy`       | 复制当前行         |
| `p`        | 粘贴               |
| `u`        | 撤销               |
| `Ctrl+r`   | 重做               |
| `x`        | 删除单个字符       |
| `>>`       | 增加缩进           |
| `<<`       | 减少缩进           |

### 搜索替换
```vim
/关键词       # 正向搜索（n/N 跳转）
?关键词       # 反向搜索
:%s/old/new/g # 全局替换
:%%s/old/new/gc # 带确认的替换
```

---

## 高级配置与插件

### 专业级 ~/.vimrc 配置
```vim
" === 界面优化 ===
set number              " 显示行号
set relativenumber      " 相对行号
set cursorline          " 高亮当前行
set scrolloff=5         " 保持视口上下边距

" === 编辑增强 ===
syntax on               " 语法高亮
set tabstop=4           " Tab显示宽度
set softtabstop=4       " 实际插入空格数
set shiftwidth=4        " 自动缩进宽度
set expandtab           " 将Tab转为空格
set autoindent          " 自动缩进

" === 搜索优化 ===
set hlsearch            " 高亮搜索结果
set incsearch           " 实时搜索
set ignorecase          " 忽略大小写
set smartcase           " 智能大小写匹配

" === 快捷键映射 ===
nmap <leader>w :w!<CR>  " <leader>默认为反斜杠
nmap <C-s> :w<CR>       " Ctrl+s快速保存
nmap <C-q> :q!<CR>      " Ctrl+q强制退出

" === 插件管理 ===
call plug#begin('~/.vim/plugged')
Plug 'preservim/nerdtree'         " 文件树
Plug 'vim-airline/vim-airline'    " 状态栏美化
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }  " 模糊搜索
Plug 'morhetz/gruvbox'            " 主题配色
call plug#end()

" === 主题设置 ===
colorscheme gruvbox     " 使用gruvbox配色
set background=dark     " 深色模式
```

### 插件管理技巧
1. 安装[vim-plug](https://github.com/junegunn/vim-plug)后：
```vim
:PlugStatus    " 查看插件状态
:PlugUpdate    " 更新所有插件
:PlugClean     " 清理未声明插件
```

---

## 小技巧

### 分屏工作流
```vim
:sp [file]     " 水平分屏（不加文件名则复制当前文件）
:vsp [file]    " 垂直分屏
Ctrl+w h/j/k/l " 切换分屏方向
Ctrl+w =       " 等分所有窗口
Ctrl+w _       " 最大化当前窗口高度
Ctrl+w \|      " 最大化当前窗口宽度
```

### 宏录制实战
1. 开始录制：`qa`（录制到寄存器a）
2. 执行操作：例如 `iHello<Esc>j`
3. 停止录制：`q`
4. 回放宏：`@a`（单次）或 `10@a`（重复10次）

### 批量修改技巧
```vim
:%s/foo/bar/g           " 全文件替换
:'<,'>s/foo/bar/g       " 在可视模式选中的区域替换
:g/pattern/d            " 删除所有匹配行
:45,60s/^/# /           " 45-60行添加注释符号
Ctrl+v → I# → Esc       " 块操作添加注释（可视块模式）
```

### 寄存器高级用法
```vim
" 系统剪贴板操作
"+yy        " 复制到系统剪贴板
"+p         " 粘贴系统剪贴板内容

" 命名寄存器
"ayy        " 复制到寄存器a
"ap         " 粘贴寄存器a内容
```

> 提示：使用 `:help <command>` 查看任何命令的官方文档