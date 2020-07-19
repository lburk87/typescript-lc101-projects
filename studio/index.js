"use strict";
exports.__esModule = true;
exports.cargo = exports.astronauts = void 0;
var Rocket_1 = require("./Rocket");
var Cargo_1 = require("./Cargo");
var Astronaut_1 = require("./Astronaut");
var falcon9 = new Rocket_1.Rocket('Falcon 9', 7500);
exports.astronauts = [
    new Astronaut_1.Astronaut(75, 'Mae'),
    new Astronaut_1.Astronaut(81, 'Sally'),
    new Astronaut_1.Astronaut(99, 'Charles')
];
for (var i = 0; i < exports.astronauts.length; i++) {
    var astronaut = exports.astronauts[i];
    var status_1 = '';
    if (falcon9.addAstronaut(astronaut)) {
        status_1 = "On board";
    }
    else {
        status_1 = "Not on board";
    }
    console.log(astronaut.name + ": " + status_1);
}
exports.cargo = [
    new Cargo_1.Cargo(3107.39, "Satellite"),
    new Cargo_1.Cargo(1000.39, "Space Probe"),
    new Cargo_1.Cargo(753, "Water"),
    new Cargo_1.Cargo(541, "Food"),
    new Cargo_1.Cargo(2107.39, "Tesla Roadster"),
];
for (var i = 0; i < exports.cargo.length; i++) {
    var c = exports.cargo[i];
    var loaded = '';
    if (falcon9.addCargo(c)) {
        loaded = "Loaded";
    }
    else {
        loaded = "Not loaded";
    }
    console.log(c.material + ": " + loaded);
}
console.log(typeof (exports.cargo));
console.log("Final cargo and astronaut mass: " + falcon9.currentMassKg() + " kg.");
