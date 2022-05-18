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
  carSchema.validate(req.body,
    {
      strict: true,
      stripUnknown: true
    })
      .then(validated => {
        req.body = validated;
        next();
      })
      .catch(err => {
        next({ status: 400, message: err.message});
      })
    
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const validatedVin = vinValidator.validate(req.body.vin)
  if(validatedVin) {
    next();
  }else {
    next({status: 400, message:`vin ${req.body.vin} is invalid`});
  }
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const carVin = req.body.vin;
  console.log(carVin);

  Cars.getAll()
    .then(cars => {
      let foundCars = cars.filter(car => car.vin === carVin);
      if(foundCars.length < 1) {
        req.body.vin = carVin;
        next();
      } else {
        next({status: 400, message:`vin ${carVin} already exists`})
      }
    })
    .catch(next);
}

const carSchema = yup.object().shape({
  vin: yup
    .string()
    .trim()
    .required("vin is missing"),
  make: yup
    .string()
    .trim()
    .required("make is missing"),
  model: yup 
  .string()
  .trim()
  .required("model is missing"),
  mileage: yup
    .number()
    .required("mileage is missing"),
  title: yup
    .string()
    .trim(),
  transmission: yup
    .string()
    .trim()
})

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}