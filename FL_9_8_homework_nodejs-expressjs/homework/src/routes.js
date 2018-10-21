const express = require('express');
const handlers = require('./handlers/car');
const bodyParser = require('body-parser');
const router = express.Router();
const jsonparser = bodyParser.json();
router.route('/car')
    .get(handlers.getCar)
    .post(jsonparser, handlers.postCar);
router.route('/car/:id')
    .get(handlers.getCarById)
    .put(jsonparser, handlers.putCarById)
    .delete(handlers.deleteCar);
    
module.exports = router;