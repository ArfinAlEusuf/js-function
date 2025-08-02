/**
 * create function that will return only the even numbers
 */

function evenNumbersOnly(numbers){
    const evens=[];
    for(const number of numbers){
        if ( number % 2 === 0){
            // console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

const numbers = [5,8,91,24,6]
// const evens = evenNumbersOnly(numbers);
// console.log('enen numbers are:',evens)

// sum of even numbers

function sumOfEvenNumbers(numbers){
    let total = 0; 
    for(const num of numbers){
        if(num % 2===0){
            total= total + num;
        }
    }
    return total;
}
const num= [1,5,6,8,3,12,16,18];
const total = sumOfEvenNumbers(num);
console.log('total of even numbers is: ',total)