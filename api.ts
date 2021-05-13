import { Router } from 'https://deno.land/x/oak@v7.4.1/mod.ts';
import * as planets from './models/planets.ts';
import * as launches from './models/launches.ts';

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

router.get('/v1/planets', (ctx) => {
  // ctx.throw(501, 'Sorry no planets available!');
  ctx.response.body = planets.getAllPlanets();
});

router.get('/v1/launches', (ctx) => {
  ctx.response.body = launches.getAll();
});

export default router;
