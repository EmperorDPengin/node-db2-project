const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first();
}

const create = async (car) => {
  // DO YOUR MAGIC
  await db('cars').insert(car);
  return db('cars').where('vin', car.vin).first();
}

module.exports = {
  getAll,
  getById,
  create
}