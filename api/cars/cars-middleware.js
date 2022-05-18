const Cars = require('./cars-model');
const yup = require('yup');
const vinValidator = require('vin-validator');

const checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  Cars.getById(req.params.id)
    .then( carById => {
      if (carById) {
        req.car = carById;
        next();
      } else {
        next({ status: 404, message: `car with id ${req.params.id} is not found`})
      }
    })
    .catch(next);
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId
  // checkCarPayload,
  // checkVinNumberValid,
  // checkVinNumberUnique
}