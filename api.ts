import { Router } from 'https://deno.land/x/oak@v7.4.1/mod.ts';

const router = new Router();

router.get('/', (ctx) => {
  ctx.response.body = `
    {___      {__      {_        {__ __       {_
    {_  {__   {__     {_ __     {__    {__   {_ __
    {__  {__  {__    {__ {__      {__       {__ {__
    {__   {__ {__   {____ {__        {__   {____ {__
    {__    {_ {__  {__     {__ {__    {__ {__     {__
    {__       {__ {__       {__  {__ __  {__       {__
                     Mission Control API`;
});

export default router;
