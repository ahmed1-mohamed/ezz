export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
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
      'X-Markdown-Tokens': '1250',
    },
  });
}
