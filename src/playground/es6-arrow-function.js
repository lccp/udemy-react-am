// const square = function(x){
//     return x * x;
// };

// const squareArrow = (x) =>  x * x;

// console.log(square(8));

// console.log(squareArrow(8));



const getFirstNameArrow = (fullName) => {
    let firstName = fullName.split(' ')[0];
    return firstName;
};

const getFirstNameArrowOptmized = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Louise Tahim'));
console.log(getFirstNameArrowOptmized('Lucas Ponte'));