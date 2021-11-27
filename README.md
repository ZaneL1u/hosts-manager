# Fast Build

![iamge](https://img.shields.io/badge/zhenze@leju.com-author-brightgreen.svg) ![iamge](https://img.shields.io/badge/v0.0.1-version-orange.svg) ![iamge](https://img.shields.io/badge/noop-star-blue.svg)

基于 Svelte 快速搭建体积小、无（低）运行时的页面、组件。

## 项目目录结构

```shell
├── assets
│   └── flexibility.js															 A JavaScript polyfill for Flexbox
├── dist/																						 打包目录
├── globals.d.ts																		 ……
├── gulpfile.js																			 打包压缩配置
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js																 PostCSS配置文件
├── public/																					 静态资源存放文件（默认配置会原封不动打包到 dist/public 目录下）
│   └── favicon.ico
├── scripts/																				 新建页面/组件脚本及通用脚本
│   ├── create.js
│   └── generate.js
├── src/
│   ├── assets/
│   │   └── logo.jpeg
│   ├── components/
│   │   ├── Navigation.svelte
│   │   └── Tailwind.svelte
│   └── apps/																			 页面位置
│       └── index
│           ├── App.svelte													 主组件
│           ├── index.html													 开发、测试时用的页面
│           └── main.ts															 入口
├── svelte.config.cjs																 svelte 配置
├── tailwind.config.js															 tailwindcss 配置
├── template/																				 新建页面的模板文件（create-app命令会根据该模板生成新页面）
│   ├── App.svelte
│   ├── index.html
│   └── main.ts
├── tsconfig.json
└── vite.config.js																	 vite配置文件
```

## 快速上手

1. 安装环境

   - Node.js >= ^9

   - npm（推荐使用 pnpm https://github.com/pnpm/pnpm ）

     ```shell
     ➜  ~ : git clone git@gitlab.leju.com:svelte/fast-build.git
     ```

2. 安装依赖

   ```shell
   pnpm install
   ```

3. 快速启动

   ```shell
   pnpm run dev
   ```

   ```shell
   ➜  fast-build git:(master) ✗ pnpm run dev

   > gnlab@1.0.0 dev /Users/yorkshire/Project/leju.com/fast-build
   > vite


     vite v2.3.8 dev server running at:

     > Local: http://localhost:3000/
     > Network: use `--host` to expose

     ready in 2620ms.
   ```

4. 现在，你可以访问 http://localhost:3000/index ${appName}（默认 vite 配置）来查看默认的页面

5. 快速创建页面

   ```shell
   pnpm run caeate-page ${pageName}
   ```

   [^pagename]: 你创建页面的名称。例如：pageA，则脚本会在 src/apps 下创建 `pageA` Fast build 页面。

6. 打包

   正常打包 - dom

   ```shell
   pnpm run build
   ```

   打包 SSR 页面

   ```shell
   pnpm run build-ssr
   ```

7. 开启一个端口预览

   ```shell
   pnpm run serve
   ```

## 帮助

🦊 Gitlab : https://gitlab.leju.com/svelte

📔 Svelte.js 中文网 : https://www.sveltejs.cn/

👽 Svelte Materialify UI : https://svelte-materialify.vercel.app/

🌪 Tailwind CSS : https://docs.tailwindchina.com/

⚡️ Vite : https://vitejs.cn/

关于 svelte 自身：https://www.zhihu.com/question/53150351

## Q&A

TODOs
