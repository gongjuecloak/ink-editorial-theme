# Ink Editorial 主题

极简编辑风格的 Astro 博客主题，设计灵感来源于传统印刷品的排版美学。

## 特性

- 衬线排版 — 正文使用 Noto Serif SC，标题使用 JetBrains Mono 等宽字体
- 深色模式 — 自动检测系统偏好，支持手动切换
- 全文搜索 — 独立搜索页面，支持实时搜索
- 评论系统 — 内置 Twikoo、Giscus 支持
- 访问统计 — Cloudflare Web Analytics、Umami 就绪
- 标签与分类 — 完整的标签、分类过滤功能
- 更新日志 — 内置 Changelog 页面，展示版本历史
- 暖纸色背景 — `#FAF8F5` 护眼暖色调
- 零框架依赖 — 纯 Astro + 原生 JS，无 React/Vue 等框架

## 快速开始

### 1. 安装主题

```bash
npm install ink-editorial
```

### 2. 创建配置文件

将示例配置复制到项目根目录：

```bash
cp node_modules/ink-editorial/src/site.config.example.mjs ./site.config.mjs
```

编辑 `site.config.mjs`，填入你的站点信息。

### 3. 创建内容

在 `src/content/blog/` 目录下创建你的博客文章（MDX 格式）。

### 4. （可选）添加示例数据

如果需要展示示例页面，创建以下数据文件：

- `src/gear.json` — 装备/设备清单
- `src/now.json` —「现在」状态更新
- `src/steam_games.json` — Steam 游戏数据（用于关于页面）
- `src/friends.json` — 友情链接

参考主题包中的示例文件。

### 5. 启动开发服务器

```bash
npm run dev
```

## 配置说明

编辑 `site.config.mjs` 自定义以下内容：

- `SITE` — 站点名称、描述、URL
- `AUTHOR` — 作者名称、简介、头像、社交链接
- `NAV_LINKS` — 导航菜单项
- `SOCIAL_LINKS` — 社交媒体链接
- `FOOTER` — 页脚文本和主题标识开关

## 内置页面

| 路由 | 说明 |
|------|------|
| `/` | 首页（文章列表） |
| `/archive` | 归档页（按日期、分类、标签） |
| `/about` | 关于页面（含 Steam 数据、友链） |
| `/gear` | 装备页面 |
| `/search` | 搜索页面 |
| `/changelog` | 更新日志页面 |
| `/friends` | 友链页面 |
| `/tags` | 标签列表页 |
| `/tags/[tag]` | 标签文章列表 |

## 自定义样式

### CSS 变量

在你的自定义 CSS 中覆盖变量：

```css
:root {
  --color-primary: #C45209;      /* 主题色（铁锈橙） */
  --bg-body: #FAF8F5;           /* 背景色（暖纸色） */
  --reading-width: 680px;        /* 阅读宽度 */
}

[data-theme="dark"] {
  --bg-body: #1a1a1a;           /* 深色模式背景 */
  --color-text: #e8e8e8;        /* 深色模式文字 */
}
```

### 深色模式

主题自动支持深色模式，用户可通过月亮图标手动切换。

## 部署

### Cloudflare Pages（推荐）

```bash
# 构建命令
npm run build

# 输出目录
dist/
```

### Vercel

```bash
vercel
```

### 自托管

```bash
npm run build
pm2 start "node dist/server/entry.mjs" --name my-blog
```

## 相关链接

- **NPM 包**: https://www.npmjs.com/package/ink-editorial
- **Gitee 仓库**: https://gitee.com/gjcloak/ink-editorial-theme
- **使用文档**: 《Ink Editorial 主题使用指南》（详见博客文章）

## 许可证

MIT
