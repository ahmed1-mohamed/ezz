export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const acceptHeader = request.headers.get('Accept') ?? '';
  const wantsMarkdown =
    acceptHeader.includes('text/markdown') ||
    acceptHeader.includes('text/plain');

  if (wantsMarkdown) {
    const markdownUrl = new URL('/index.md', request.url);
    const markdownResponse = await fetch(markdownUrl.toString());
    const body = await markdownResponse.text();

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': 'Accept',
        'Cache-Control': 'public, max-age=3600',
        'X-Markdown-Tokens': 'enabled',
      },
    });
  }

  return Response.redirect(new URL('/', request.url), 302);
}
