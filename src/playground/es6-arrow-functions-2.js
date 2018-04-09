const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1));


const user = {
    name: 'Lucas',
    cities: ['Fortaleza', 'São Paulo', 'Recife'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city+'!!');
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [6, 12, 47, 38],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};


console.log(multiplier.multiply());