import koaRouter from 'koa-router';
import { success, error } from '../api';
import R from 'ramda';

const sizeController = koaRouter();

const sizeData = [
  {id: 0, size: 'broto', radio: 5},
  {id: 1, size: 'pequeno', radio: 8},
  {id: 2, size: 'medio', radio: 12},
  {id: 3, size: 'grande', radio: 15},
  {id: 4, size: 'familia', radio: 25},
];

sizeController
  .prefix('/size')
  .get('/', get)
;


async function get(ctx, next) {
  ctx.body = success('size_get', sizeData);
}


export default sizeController;
