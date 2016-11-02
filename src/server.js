import env from 'dotenv';

env.config({silent: true});

import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa-cors';
import convert from 'koa-convert';

import PizzaController from './controllers/pizza.js';

const app = new koa();

app
  .use(convert(cors()))
  .use(bodyParser())
  .use(PizzaController.routes());

app.listen(process.env.PORT || 8000);
