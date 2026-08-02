import { next } from '@vercel/edge';

export const config = {
  matcher: '/',
};

const LINK_HEADER_VALUE = [
  '</.well-known/api-catalog>; rel="api-catalog"',
  '</.well-known/agent-skills/index.json>; rel="service-desc"',
  '</auth.md>; rel="service-doc"',
  '</.well-known/mcp/server-card.json>; rel="mcp-server-card"',
].join(', ');

export default async function middleware(request) {
  const acceptHeader = request.headers.get('accept') || '';

  if (acceptHeader.includes('text/markdown')) {
    const markdownUrl = new URL('/index.md', request.url);
    const markdownResponse = await fetch(markdownUrl.toString());
    const content = await markdownResponse.text();

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=3600',
        'x-markdown-tokens': '1250',
        'Link': LINK_HEADER_VALUE,
        'Access-Control-Allow-Origin': '*',
      },
    });
  }

  return next({
    headers: {
      'Link': LINK_HEADER_VALUE,
      'Vary': 'Accept',
    },
  });
}
