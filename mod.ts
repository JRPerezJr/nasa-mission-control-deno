import { Application } from 'https://deno.land/x/oak@v7.4.1/mod.ts';

const app = new Application();
const PORT = 8000;

app.use((ctx) => {
  ctx.response.body = `
    {___      {__      {_        {__ __       {_
    {_  {__   {__     {_ __     {__    {__   {_ __
    {__  {__  {__    {__ {__      {__       {__ {__
    {__   {__ {__   {____ {__        {__   {____ {__
    {__    {_ {__  {__     {__ {__    {__ {__     {__
    {__       {__ {__       {__  {__ __  {__       {__
                     Mission Control API`;
});

if (import.meta.main) {
  await app.listen({
    port: PORT,
  });
}
