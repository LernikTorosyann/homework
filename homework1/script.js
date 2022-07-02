// 1

function oddEven(num){
    return num % 2 === 0 ? 'even' : 'odd' 
}

console.log(oddEven())

// 2
function foo(num1, num2){
    return num1 % num2 === 0 || num2 % num1 === 0 ? 1 : 0
}

console.log(foo(14,2))


// 3
function triangle(a,b){
   return 180 - (a + b)
}

console.log(triangle(30,30))

//4
function sum(n){
    return n + +("" + n + n) + +("" + n + n + n)
}

console.log(sum(3))

//5
function lastDigit(num){
    if(num % 10 === 0){
        return num
    } 
    
    let lastDigit =  num % 10
    return +("" + lastDigit + (num - num % 10)/10)
}

console.log(lastDigit(15205))

// 6 
function avg(a,b,c,d,e){
    return (a + b + c + d + e)/5
}

console.log(avg(45, -12, 0, 3, -15))

// 7
function multipleNumber(num){
    if(num % 3 === 0 && num % 5 === 0 && num % 7 === 0){
        return `${num} is a multiple of 3, 5 and 7.`
    }else if(num % 3 === 0 && num % 5 === 0){
        return `${num} is a multiple of 3 and 5.`
    }else if(num % 3 === 0 && num % 7 === 0){
        return `${num} is a multiple of 3 and 7.`
    }else if(num % 7 === 0 && num % 5 === 0){
        return `${num} is a multiple of 5 and 7.`
    }else if(num % 3 === 0){
        return `${num} is a multiple of 3.`
    }else if(num % 5 === 0){
        return `${num} is a multiple of 5.`
    }else if(num % 7 === 0){
        return `${num} is a multiple of 7.`
    }

    return `${num} is not a multiple of 3, 5 or 7.”`
}

console.log(multipleNumber(8))

// 8 

function childDevelopment(age, str){
    if(age >= 1 && age <= 12 && str === 'months'){
        return 'baby'
    }else if(str === 'year'){
        if(age >= 1 && age <= 2){
            return 'toddler '
        }else if(age >= 3 && age <= 12){
            return 'child '
        }else if(age >= 13 && age <= 17){
            return 'teenager '
        }else if(age >= 18 ){
            return 'adult'
        }
    }
} 

console.log(childDevelopment(11,'months'))

// 9
function ascending(a,b,c){
    if(a > b && b > c){
       console.log(c,b,a)
    }else if(a < b && b < c){
        console.log(a,b,c)
    }else if(b < a && a < c){
        console.log(b,a,c)
    }else if(a < b && c < b){
        console.log(a,c,b)
    }
}

ascending(0 , -58, 12)

// 10
function exam(a,b,c){
    if(a >= 40 && b >= 40 && c >= 40){
        return 'passed'
    }else if((a + b + c) >= 50){
        if((a < 40 && b > 40 && c > 40)){
            return "passed"
        }else if((b < 40 && a > 40 && c > 40)){
            return "passed"
        }else if((c < 40 && a > 40 && b > 40)){
            return "passed"
        }
    }
    return 'not passed'
}

console.log(exam(35,100,39))


// 11

function signOfProduct(a,b,c){
    if(a === 0 || b === 0 || c === 0){
        return 'unsigned'
    }else if(a < 0 && b < 0 && c < 0){
        return '-'
    }else if(a < 0 && b < 0 || a < 0 && c < 0 || b < 0 && c < 0){
        return '+'
    }else if(a < 0 || b < 0 || c < 0){
        return '-'
    }
    return '+'
}

console.log(signOfProduct(-4, -19, 2))


// 12

function quadraticEquations(a,b,c){
    if(a === 0){
        return  'Enter valid constans'
    }
    let d = Math.pow(b,2) - 4 * a * c
    if(d < 0){
        return 'Solution does not exists'
    }
    let x1 = (-b - Math.sqrt(d)) / (2 * a)
    let x2 = (-b + Math.sqrt(d)) / (2 * a)
    if(x1 === x2){
        return `Solution is ${x1}`
    }
    return `Solutions are ${x1} and ${x2}`
}

console.log(quadraticEquations(3,9,0))

// 13

let n = 16;

let i = 0;
let j = 0;

if(n % 2 === 0 && !Math.floor(n / 20)){
        i += 1
}

if(n % 3 ===0 && n % 10 === 1){
        j += 1
}

console.log(i)
console.log(j)

// 14

// tarberak 1

// function digitInNum(digit,num){
//     if(num.toString().split('').includes(digit.toString())){
//         return 'yes'
//     }
//     return 'no'
// }

// tarberak 2

function digitInNum(digit,num){
    if (num < 0) { 
        num *= -1;
    }
    if (num === digit) { 
        return "yes";
    }
    while (num !== 0) { 
        if (num % 10 === digit) { 
            return "yes";
        }
        num = Math.floor(num / 10);
    }
    return "no";
}


console.log(digitInNum(5,-7))

// 15
function foo(num){
    let arr = num.toString().split('')
    let last = arr.pop()
    let first = arr.shift()
    arr.push(first)
    arr.unshift(last)
    return Number(arr.join(''))
}

console.log(foo(46789))


// 17

function area(type,a,b){
    if(a > 0 && b > 0){
        if(type === 'rectangle'){
            return  `Square of the rectangle is ${a * b}`
        }
    
        return `Square of the triangle is ${1/2 * a * b}`
    }

    return 'Please enter only positives'
    
}

console.log(area('triangle', 7,-5))

// 18

function difference(num){
    let largest = 0;
    let smallest = 9;
 
    while (num) {
        let last = num % 10;
        largest = Math.max(last, largest);
        smallest = Math.min(last, smallest);
        num = parseInt(num / 10);
    }
    return largest - smallest
 };
 console.log(difference(58192));