# 宁舒依个人作品集：VS Code 使用方法

## 1. 打开项目

解压下载的 ZIP 文件，在 VS Code 中选择：

`文件（File） → 打开文件夹（Open Folder）`

选择解压后的 `ning-shuyi-portfolio` 文件夹。

## 2. 安装依赖

在 VS Code 顶部选择：

`终端（Terminal） → 新建终端（New Terminal）`

运行：

```bash
npm install
```

## 3. 启动网站

安装完成后运行：

```bash
npm run dev
```

终端会显示本地网址，通常类似：

```text
http://localhost:3000
```

按住 `Ctrl` 并点击网址，即可在浏览器打开。

## 4. 主要修改位置

- 页面内容：`app/page.tsx`
- 页面样式与动画：`app/globals.css`
- 网站标题与简介：`app/layout.tsx`
- 图片和视频：放入 `public` 文件夹

## 5. 停止网站

回到运行网站的终端，按：

```text
Ctrl + C
```
