const numbers = [1, 2, 3, 4, 5]

for (const number of numbers) {
    if (number === 2) {
        console.log("two")
    }
    else if (number === 4) {
        console.log("four")
    }
    else {
        console.log("number is odd")
    }

}

const addition = (a, b) => {
    //let sum = a+ b
    return a + b
}
console.log(addition(5, 3))


const subtraction = (a, b) => {
    return a - b
}
console.log(subtraction(6, 5))



const volume = (length, width, height) => {
    return length * width * height
}
console.log(volume(3, 3, 3))



//make an array of strings named colors of traffic lights
// make a function that console logs "stop" "go" or "slow down" based off the color in the array



const lights = ["red", "green", "red", "red", "green", "yellow"]

//the paramater "colors" is plural because we are using multiple colors
const trafficSigns = (colors) => {
    for (const color of colors) {
        if (color === "green") {
            console.log("Go")
        } else if (color === "yellow") {
            console.log("Slow down")
        } else {
            console.log("Stop")
        }
    }
}

// we are invoking this function, we use lights as the argument because it is the variable that holds the entire array
trafficSigns(lights) //!THIS IS INVOKING THE FUNCTION, WITHOUT INVOKING THE FUNCTION THE TRAFFICSIGNS FUNCTION DOESNT HAVE THE INFORMATION (ARGUMENT) FROM THE ARRAY IT NEEDS TO RUN AND BE SEEN



