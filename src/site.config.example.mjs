// ============================================
// 我的博客 - 站点配置
// 只保留必须手动配置的项，分类/标签从文章 frontmatter 动态获取
// ============================================

// ----- 站点信息 -----
export const SITE = {
  title: '我的博客',
  subtitle: '分享知识与思考',
  description: '在云端俯瞰图景，在图景中寻找云的方向',
  url: 'https://your-blog.com',
  startYear: 2022,
  // 深度栏目：手动指定 slug（首页「深度」板块）
  featuredSlugs: [
    'config-guide',
    'design-system-css-variables',
    'writing-guide',
    'deploy-guide',
    'search-add-to-blog',
    'css-variables-design-system',
  ],
  // 碎片流：包含这些 tag 的文章归入碎片（首页「碎片」板块）
  fragmentTags: ['碎片', '短评', '随想', '日记', '笔记'],
};

// ----- 博主信息（只配置一次，全局引用） -----
export const AUTHOR = {
  name: 'YourName',
  bio: 'P社战帅 / 游戏爱好者 / 写作者',
  motto: '在云端俯瞰图景，在图景中寻找云的方向。',
  description: '一个在云端与图景之间探索的人，相信好的设计和好的代码一样，都是简洁而有力的表达。',
  location: '中国福建厦门',
};

// ----- 导航菜单 -----
export const NAV_LINKS = [
  { name: '首页', path: '/' },
  { name: '装备', path: '/gear' },
  { name: '归档', path: '/archive' },
  { name: '主题', path: '/theme' },
  { name: '关于', path: '/about' }
];

// ----- 社交链接 -----
export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername' },
  { name: 'B站', icon: 'bilibili', url: 'https://space.bilibili.com/3054324' },
  { name: '邮箱', icon: 'mail', url: 'mailto:your-email@qq.com' }
];

// ----- 图片优化配置 -----
export const IMAGE = {
  // Sharp 压缩格式：avif（更小）或 webp（兼容性好）
  format: 'webp',
  // 压缩质量（1-100），webp 建议 75-85
  quality: 80,
  // 文章封面图默认宽度断点
  heroWidths: [680, 960, 1200],
  // 文章封面图 sizes 属性
  heroSizes: '(max-width: 768px) 100vw, 680px',
  // 装备页图片尺寸
  gearWidth: 80,
  gearHeight: 80,
  // 友链头像尺寸
  avatarWidth: 48,
  avatarHeight: 48,
  // Steam 游戏封面尺寸（原始 460x215）
  steamCoverWidth: 460,
  steamCoverHeight: 215,
};

// ----- 页脚 -----
export const FOOTER = {
  copyright: `©${new Date().getFullYear()} By ${AUTHOR.name}`,
  powered: 'Astro & CloakBlog',
};
