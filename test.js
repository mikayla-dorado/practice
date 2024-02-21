//practice for technical interviews

//? return the sum of 2 numbers
const addition = (a, b) => {
    let sum = a + b
    return sum
}
console.log(addition(4,4))

// //? convert minutes to seconds
const minToSec = (x) => {
    conversion = x * 60
    return conversion
}
console.log(minToSec(5)) // multiplies 5 by 60

// //? get the number of items in an array
const sports = ["Baseball", "Soccer", "Football"]
length = sports.length
console.log(length) // returns 3 since there is 3 items in the array

sports.push("Softball")
console.log(length) // returns 4 since we added an item to the array

indexOf = sports.indexOf("Football") 
console.log(indexOf)// returns the number of the spot the "Football" is in the array, it's 2 because "Football is at index 2"

const slice = sports.slice(1);
console.log(slice); // this removes the first item in the array, making a new array with these items "Soccer", "Football", "Softball"