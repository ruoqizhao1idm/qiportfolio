# 作品集文字修改指南

在 VS Code 中，主要文字位于 `app` 文件夹。修改并保存后，Vite 通常会自动刷新浏览器。

## 宇宙企鹅开场

文件：`app/page.tsx`

- 英文和中文开场标题
- 开场介绍
- Enter portfolio / 进入作品集按钮
- Skip intro / 跳过动画

企鹅的位置、大小和 Three.js 动效位于：

`app/components/cosmic-scene.tsx`

开场与网站的视觉样式位于：

`app/globals.css`

## 暖色作品集首页

文件：`app/portfolio/page.tsx`

- 首页定位与介绍
- Selected Projects / 精选项目
- About 预览
- Experiments 预览
- 联系区域

## 四个项目案例内容

文件：`app/data/projects.ts`

Fantasia、StyleBook、LetItGreen 和 TCD 的中英文案例内容都集中在这里。

每段双语内容采用以下格式：

```ts
l("English text", "中文文字")
```

修改引号中的文字即可，不要删除逗号、括号或引号。

## About 页面

文件：`app/about/page.tsx`

- 姓名和个人介绍
- 教育经历
- 中英文能力列表
- 产品设计之外
- 简历、邮箱与 LinkedIn

## Contact 页面

文件：`app/contact/page.tsx`

- 求职状态
- 邮箱
- LinkedIn
- 简历
- 所在地点

## Experiments 页面

文件：`app/experiments/page.tsx`

- EmoFuneral
- The Death of Consort Hua
- 3D Spatial Modelling

## 导航栏和页脚

文件：`app/components/site-shell.tsx`

- 左上角 Qi
- 导航名称
- 页脚姓名和邮箱

## 图片

图片位于：`public/media/`

替换图片时，建议保持原文件名不变；这样不需要同时修改代码中的图片路径。

## 本地运行

在项目根目录运行：

```powershell
npx vite
```

然后打开终端显示的本地网址，通常为 `http://localhost:5173/`。



请直接换一个全新的端口，绕过浏览器缓存和 Service Worker：
终端按 Ctrl + C。

运行：

npx vite --force --port 5180
使用外部 Chrome/Edge 打开：
http://127.0.0.1:5180/portfolio