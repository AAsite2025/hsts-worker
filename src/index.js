export default {
  async fetch(request, env, ctx) {
    const response = await fetch(request);
    const newHeaders = new Headers(response.headers);
    newHeaders.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
    return new Response(await response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
}
