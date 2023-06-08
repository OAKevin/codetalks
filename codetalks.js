
// Coding Problem 1

// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.
//A promise is the eventual success or failture of a async operation withits resulting value 3 states: pending, fulfilled and rejected
//Pros: Integrated error handling and organized control async logic
//cons: only one object can be retured

const myPromise = new Promise((resolve, reject)=>{
    let a = 100 + 100;
    if( a == 200) {
        resolve("Success");
    }else{
        reject("Failure")
    }
})
myPromise 
    .then((message)=> {
        console.log(`This is a: ${message}` )
    })
    .catch((nessage)=>{
        console.log(`This is a: ${message}`)
    })

// Coding Problem 2 

// What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

//a function passed into another function as an argument
//call back hell is multiple callbacks nested within eachother
//occurs when we have multiple asunc operations
//we can avoid them using promises
asyncOp1()
.then(function(result1){
    return asyncOp2();
})
.then(function(result2){
    return asyncOp3
})

// Coding Problem 3

// The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.

const luffy = {
    name: "Monkey D. Luffy",
    crew: "Straw Hat Pirates",
    regularAttack: function(){
        console.log(`I am ${this.name} of the ${this.crew}! Gomu no Pistole!`)
    },
    arrowAttack: () =>{
        console.log(`I am ${this.name} of the ${this.crew}! Gomu Gomu no Pistol!`)
    }
};
luffy.refularAttack();
luffy.arrowAttack();

// Coding Problem 4


// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];
function filteredNumbers(arr){
    return arr.fiter((num)=>{
        const divisibleBy3 = num % 3 === 0;
        const divisibleBy6 = num % 6 === 0;
        const notDivisibleBy9 = num % 9 !==0;
        return divisibleBy3 && divisibleBy6 && notDivisibleBy9
    })
}
const result = filterNumbers(numbers);
console.log(result);

function filterNum(numbers){
    const filterNum = numbers.filter((number) =>{
        return number % 3 === 0 && number % 6 === 0 && number % 9 !== 0;
    });
    return filterNum;
}
const newArr = filterNum(numbers);

console.log(newArr);
// Coding Problem 5
// What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.
//async await helps you simplify the syntax and makes the code more readable by avoiding callback hell and promise chaining

const Promise = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("hello world!");
        }, 2000)
    })
}
async function myFunction(){
    let value = await Promise();
    console.log(value)
}
myFunction()