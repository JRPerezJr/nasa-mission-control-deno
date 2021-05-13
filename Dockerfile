FROM hayd/deno:alpine-1.9.2

WORKDIR /app

COPY . .

USER deno

CMD [ "run",  "--allow-net", "--alow-read", "src/mod.ts"]

EXPOSE 8000