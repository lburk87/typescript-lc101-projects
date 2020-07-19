"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var index_1 = require("./index");
var index_2 = require("./index");
var Rocket = /** @class */ (function () {
    function Rocket(a, b) {
        this.cargoItems = index_1.cargo;
        this.astronauts = index_2.astronauts;
        this.name = a;
        this.totalCapacityKg = b;
    }
    Rocket.prototype.sumMass = function (items) {
        var itemsArray = items;
        var mass = 0;
        for (var i = 0; i < itemsArray.length; i++) {
            var item = itemsArray[i];
            mass = mass + item.massKg;
        }
        return mass;
    };
    Rocket.prototype.currentMassKg = function () {
        var astroMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        var currentMass = astroMass + cargoMass;
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
