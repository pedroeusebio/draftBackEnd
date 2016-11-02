import koaRouter from 'koa-router';
import { success, error } from '../api';

const pizzaController = koaRouter();


pizzaController
  .prefix('/pizza')
  .get('/', get);
  // .post('/', post);


async function get(ctx, next) {
  let data = [
    {tipo: 'calabresa', tamanho: 'grande', borda: 'no'},
    {tipo: 'calabresa', tamanho: 'grande', borda: 'no'},
    {tipo: 'calabresa', tamanho: 'grande', borda: 'no'},
    {tipo: 'calabresa', tamanho: 'grande', borda: 'no'},
    {tipo: 'calabresa', tamanho: 'grande', borda: 'no'},
  ];
  ctx.body = success('pizza_get', data);
}

export default pizzaController;
