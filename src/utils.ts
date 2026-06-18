// 排序文章（置顶 + 时间倒序）
export function sortPosts(posts) {
  return posts.sort((a, b) => {
    const aPin = a.data.pinned ? 1 : 0;
    const bPin = b.data.pinned ? 1 : 0;
    if (aPin !== bPin) return bPin - aPin;
    return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
  });
}

// 从文章集合动态提取所有分类（含计数）
export function getCategories(posts) {
  const map = new Map();
  posts.forEach(p => {
    const cat = p.data.category || '未分类';
    map.set(cat, (map.get(cat) || 0) + 1);
  });
  return map;
}

// 从文章集合动态提取所有标签（含计数）
export function getTags(posts) {
  const map = new Map();
  posts.forEach(p => {
    (p.data.tags || []).forEach(t => {
      map.set(t, (map.get(t) || 0) + 1);
    });
  });
  return map;
}

// 为分类自动分配颜色（基于名称哈希）
const PALETTE = [
  '#425AEF', '#57BD6A', '#E74C8B', '#F39C12', '#9B59B6',
  '#00BCD4', '#E67E22', '#1ABC9C', '#3498DB', '#E91E63',
  '#8E44AD', '#27AE60', '#D35400', '#2ECC71', '#C0392B',
];

export function getCategoryColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

// 计算阅读时间（中英文混合）
export function calcReadingTime(content) {
  const chinese = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const english = (content.match(/[a-zA-Z]+/g) || []).length;
  const images = (content.match(/!\[.*?\]\(.*?\)/g) || []).length;
  const imageTime = images * 12;
  const total = chinese + Math.floor(english / 4) + imageTime;
  return Math.max(1, Math.ceil(total / 400));
}



// 计算字数（中英文混合）
export function calcWordCount(content) {
  const chinese = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  const english = (content.match(/[a-zA-Z]+/g) || []).length;
  const total = chinese + Math.floor(english / 4);
  return Math.max(1, total);
}
// 格式化日期为中文
export function formatDate(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  return `${y}年${m}月${day}日`;
}

// 格式化日期为简短形式
export function formatDateShort(date) {
  const d = new Date(date);
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${m}-${day}`;
}
