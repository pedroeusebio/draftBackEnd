import koaRouter from 'koa-router';
import { success, error } from '../api';
import R from 'ramda';

const pizzaController = koaRouter();

const pizzaData = [
  {id: 0, tipo: 'calabresa'},
  {id: 1, tipo: 'mussarela'},
  {id: 2, tipo: 'quatro queijos'},
  {id: 3, tipo: 'peperoni'},
  {id: 4, tipo: 'portuguesa'},
];

pizzaController
  .prefix('/pizza')
  .get('/', get)
  .get('/:id', getPizza)
;
  // .post('/', post);


async function get(ctx, next) {
  let data = R.map((x) =>{
    return(
      {id: x.id, tipo: x.tipo}
    );
  }, pizzaData);
  ctx.body = success('pizza_get', data);
}

async function getPizza( ctx, next) {
  let id = ctx.params.id;
  let data = R.filter((x) => x.id == id, pizzaData);
  ctx.body = (data ? success('pizza_get_detail', data) : error('pizza_get_detail', data));
}

export default pizzaController;
