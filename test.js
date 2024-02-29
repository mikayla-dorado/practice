//practice for technical interviews

// //? return the sum of 2 numbers
const addition = (a, b) => {
    let sum = a + b
    return sum
}
console.log(addition(4, 4))

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

//? function that checks if a number is less thatn 100
const Check = (x) => {
    x > 100 ? console.log('Greater') : console.log("Less than")
}
console.log(Check(13))


//? FIZZBUZZ CHALLENGE
// Write a program that prints the numbers 1 - 100. for multiples of 3, print the word 'Fizz' instead of the number,
// for multiples of 5, print the word 'Buzz', for multiples of both 3 and 5, print 'FizzBuzz'

//this initializes 'i' to 1 and iterates as long as 'i' is <= 100. it increments by 1 in ach iteration
// for (let i = 1; i <= 100; i += 1) {
//     //checks if 'i' is divisible by 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz')
//     }
//     //checks if only divisible by 3
//     else if (i % 3 === 0) {
//         console.log('Fizz')
//     }
//     //checks if only divisible by 5
//     else if (i % 5 === 0) {
//         console.log('Buzz')
//         //if none of the above conditions are met, print current value of 'i'
//     } else {
//         console.log(i)
//     }
// }

//? Make a counter
//?Set up in HTML first, apply logic here
// let count = 0;
// function updateDisplay () {
//     document.getElementById("countDisplay").textContent = count;
// }

// function increment() {
//     count++
//     updateDisplay()
// }

// function decrement() {
//     if (count > 0) {
//         count--
//         updateDisplay()
//     }
// }

// function reset() {
//     count = 0
//     updateDisplay()
// }

// updateDisplay()






// //! NEED TO MAKE A REACT PRACTICE FOLDER
// //?React counter using useState

// const Counter = () => {
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment Count</button>
//             <button onClick={() => setCount(count - 1)}>Decrement Count</button>
//         </div>
//     )
// } 

for (let i = 1; i <= 100; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

//? this version is incorrect, the order of the if statements matter
//?the third condition will never be reached because 'i % 3 === 0' was already met in the first condition, so it will skip 'FizzBuzz' and only print 'Fizz'
// for (let i = 1; i <= 100; i += 1) {
//     if ( i % 3 === 0) {
//         console.log("Fizz") 
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else {
//         console.log(i)
//     }
// }



//?interview questions

//! What are your strengths?
//I'm not afraid to ask questions or get help, I am genuinly interested in contributing to a team and being an asset for my company.
//I work well with a team, and I am also a natural leader.
//Time management, I hate being late and I love meeting a deadline.

//! What are you weaknesses?
//Public speaking can give me anxiety, but once I get comfortable with people I feel more confident
//I can allow imposter syndrome to take over and affect me mentally, but only for a short amount of time. 

//! Git commands
//asked basic Git command questions

//! Walk through code
// showed him my site and then walked through & explained my code

//! Confidence!
// don't say 'this is just a simple application'
// don't sell yourself short