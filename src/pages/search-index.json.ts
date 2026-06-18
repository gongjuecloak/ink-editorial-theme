import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  const index = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.id,
    category: post.data.category || '未分类',
    tags: post.data.tags || [],
    pubDate: post.data.pubDate.toISOString().split('T')[0],
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
