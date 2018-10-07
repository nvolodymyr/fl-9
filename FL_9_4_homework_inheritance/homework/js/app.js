'use strict';

function assign(target) {
    if (target === null || target === undefined) {
        throw new Error('Cannot convert undefined or null to object');
    }
    let toObj = Object(target);
    for (let i = 0; i < arguments.length; i++) {
        let nextSource = arguments[i];
        if (nextSource) {
            for (let key in nextSource) {
                if (nextSource.hasOwnProperty(key)) {
                    toObj[key] = nextSource[key];
                }
            }
        }
    }
    return toObj;
}

let defaults = {
    a: 123,
    b: 777
};
let options = {
    a: 456
};
let configs = assign({}, defaults, options); // {a: 456, b: 777}
console.log(JSON.stringify(configs));
// Part2
function drive(value) {
    switch (value) {
        case 'up':
            this.y += this.getSpeed();
            break;
        case 'down':
            this.y -= this.getSpeed();
            break;
        case 'left':
            this.x - +this.getSpeed();
            break;
        case 'right':
            this.x += this.getSpeed();
            break;
        default:
            console.log(`Error, only: up, down,left, right`);
    }
}

function Bot(obj) {
    this.name = obj.name;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
    this.defaultSpeed = obj.speed;
}
Bot.prototype.getSpeed = function () {
    return this.speed;
}
Bot.prototype.setSpeed = function (value) {
    this.speed = value;
}
Bot.prototype.getDefaulSpeed = function () {
    return this.defaultSpeed;
}
Bot.prototype.getCoodrinate = function () {
    return {
        x: this.x,
        y: this.y
    }
}
Bot.prototype.setCoordinate = function (value) {
    this.x = value.x;
    this.y = value.y;
}
Bot.prototype.move = function (value) {
    drive.call(this, value);
}
Bot.prototype.showPosition = function () {
    return console.log(`I am ${this.constructor.name}  ${this.name} .\
    I am located at: ${this.getCoordinates().x}:${this.getCoordinates().y} `);
}
// RaceBot extends Bot
function RaceBot(obj) {
    Bot.call(this, obj);
    this.previosMove = null;
}
RaceBot.prototype = Object.create(Bot.prototype);
RaceBot.prototype.constructor = RaceBot;

RaceBot.prototype.move = function (value) {
    if (value === this.previosMove) {
        this.setSpeed(this.getSpeed() + 1);
    } else {
        this.setSpeed(this.defaultSpeed());
    }
    drive.call(this, value);
    this.previosMove = value;
}
// SpeedBot extends Bot
function SpeedBot(obj) {
    Bot.call(this, obj);
}
SpeedBot.prototype = Object.create(Bot.prototype);
SpeedBot.prototype.constructor = SpeedBot;
SpeedBot.prototype.prepareEngine = function () {
    this.setSpeed(this.getSpeed() + 2);
}
SpeedBot.prototype.move = function (value) {
    drive.call(this, value);
    if (this.getSpeed() > this.getDefaulSpeed()) {
        this.setSpeed(this.getSpeed() - 1);
    }
}