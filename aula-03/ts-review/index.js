"use strict";
/// Ele permite você definir tipos
/// Quando se trabalha com um time diverso, é muito fácil ocorrer o mal uso
/// das funções legado.
exports.__esModule = true;
exports.executeMath = void 0;
var executeMath = function (input) {
    var res;
    if (input.type === "SUB") {
        res = input.value - 1;
    }
    else if (input.type === "SUM") {
        res = input.value + 1;
    }
    if (input.checkForNegative && res < 0) {
        throw new Error("Negative value detected!");
    }
    return res.toString();
};
exports.executeMath = executeMath;
var body = {
    value: 0,
    type: "SUB",
    checkForNegative: true
};
console.log((0, exports.executeMath)(body));
/// o Typescript ele sempre é "transpilado" para Javascript
