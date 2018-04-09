'use strict';

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

var user = {
    name: 'Lucas',
    cities: ['Fortaleza', 'São Paulo', 'Recife'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city + '!!';
        });
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [6, 12, 47, 38],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
