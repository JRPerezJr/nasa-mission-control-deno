import * as log from 'https://deno.land/std@0.96.0/log/mod.ts';

import { Application, send } from 'https://deno.land/x/oak@v7.4.1/mod.ts';
import api from './api.ts';

const app = new Application();
const PORT = 8000;

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler('INFO'),
  },
  loggers: {
    default: {
      level: 'INFO',
      handlers: ['console'],
    },
  },
});

app.addEventListener('error', (event) => {
  log.error(event.error);
});

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.response.body = 'Internal server error. 内部サーバーエラー。 ';
    throw error;
  }
});

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get('X-Response-Time');
  log.info(`${ctx.request.method} ${ctx.request.url}: ${time}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set('X-Response-Time', `${delta}ms`);
});

app.use(api.routes());
app.use(api.allowedMethods());

app.use(async (ctx) => {
  const filePath = ctx.request.url.pathname;
  const fileWhitelist = [
    '/images/favicon.png',
    '/index.html',
    '/js/script.js',
    '/stylesheets/style.css',
  ];
  if (fileWhitelist.includes(filePath)) {
    await send(ctx, filePath, {
      root: `${Deno.cwd()}/public`,
    });
  }
});

if (import.meta.main) {
  log.info(
    `🦄 Flying high on port ${PORT}. ポート${PORT}で🦕Denoサーバーを起動しています。`
  );
  await app.listen({
    port: PORT,
  });
}
