// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');
const {checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid} = require('./cars-middleware');

router.get('/', async (req, res, next) => {
    
    try{
        const cars = await Cars.getAll();
        res.status(200).json(cars);
    }
    catch(err){
        next(err)
    }
});

router.get('/:id', checkCarId, (req, res, next) => {
    res.status(200).json(req.car);
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, (req, res, next) => {
    Cars.create(req.body)
        .then( createdCar => {
            res.status(201).json(createdCar);
        })
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message:err.message,
        prodmessage: err.message
    });
});

module.exports = router;