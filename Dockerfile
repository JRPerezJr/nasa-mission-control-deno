FROM denoland/deno:alpine

WORKDIR /app

COPY . .

RUN mv src/public .; mv src/data .

USER deno

CMD [ "run",  "--allow-net", "--allow-read", "src/mod.ts"]

EXPOSE 8000