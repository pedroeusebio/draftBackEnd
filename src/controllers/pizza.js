import koaRouter from 'koa-router';
import { success, error } from '../api';
import R from 'ramda';

const pizzaController = koaRouter();

const pizzaData = [
  {id: 0, tipo: 'calabresa', tamanho: 'grande', borda: 'no'},
  {id: 1, tipo: 'mussarela', tamanho: 'grande', borda: 'no'},
  {id: 2, tipo: 'quatro queijos', tamanho: 'grande', borda: 'no'},
  {id: 3, tipo: 'peperoni', tamanho: 'grande', borda: 'no'},
  {id: 4, tipo: 'portuguesa', tamanho: 'grande', borda: 'no'},
];

pizzaController
  .prefix('/pizza')
  .get('/', get)
  .get('/:id', getPizza)
;
  // .post('/', post);


async function get(ctx, next) {
  let data = R.map((x) => x.tipo, pizzaData);
  ctx.body = success('pizza_get', data);
}

async function getPizza( ctx, next) {
  let id = ctx.params.id;
  let data = R.filter((x) => x.id == id, pizzaData);
  ctx.body = (data ? success('pizza_get_detail', data) : error('pizza_get_detail', data));
}

export default pizzaController;
