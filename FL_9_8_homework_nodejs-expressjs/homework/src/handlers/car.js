const fs = require('fs');
let data = JSON.parse(fs.readFileSync('../db/data.json'));
const middlewares = require('../middlewares/delete-authorization');

exports.postCar = (request, response) => {
    const newCar = {
        id: request.body.id,
        brand: request.body.brand,
        model: request.body.model,
        engineVolume: request.body.engineVolume,
        year: request.body.year
    }
    let triger = data.find(function (car) {
        return car.id === newCar.id
    });
    if (!triger) {
        data.push(newCar);
        fs.writeFileSync('../db/data.json', JSON.stringify(data));
        response.status(201).send(newCar);
    } else {
        response.status(409).send(`
            "message": "Car already exists."`);
    }
}

exports.getCar = (request, response) => {
    response.status(200).send(data);
}

exports.getCarById = (request, response) => {
    const car = data.find(car => car.id === Number(request.params.id));
    if (car) {
        return response.status(200).send(car);
    }
    response.status(404).send("The car not found");
}
exports.putCarById = (request, response) => {
    const car = data.find(car => car.id === Number(request.params.id));
    if (car) {
        car.brand = request.body.brand;
        car.model = request.body.model;
        car.engineVolume = request.body.engineVolume;
        car.year = request.body.year;
        fs.writeFileSync('../db/data.json', JSON.stringify(data));
        response.status(200).send(car);
    } else {
        response.status(404).send(`Not found car with this id`);
    }
}
exports.deleteCar = [
    middlewares.checkAuthorization,
    (request, response) => {
        const sms = {
            message: 'The car has been successfully removed'
        };
        const car = data.find(car => car.id === Number(request.params.id));
        if (data[car]) {
            data.splice(car, 1);
            fs.writeFileSync('../db/data.json', JSON.stringify(data));
            response.status(200).send(sms);
        } else {
            response.status(404).send(`car with such id has not been found`);
        }
    }
];