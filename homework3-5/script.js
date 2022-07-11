//1 Given an array of numbers. Find the index of the second maximum element.
function secondMax(arr){
    const  newArr =  [...arr]
    let max = newArr.reduce(function (acc, elem) {
        return ( acc > elem ? acc : elem );
      });
    newArr.splice(arr.indexOf(max),1)
    max = newArr.reduce(function (acc, elem) {
        return ( acc > elem ? acc : elem );
      })
      return arr.indexOf(max)
}

// 2


//3 Write a program to check the validity of password input by users.

function checkPassword(password){
    const valid=  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,18}$/;
    if(!password.match(valid)) {
        return "Invalid"
    }
    return 'Valid'
}


// 4 Write a program to print X star pattern series using loop.

function  star(n){
    let string = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
        string += " ";
        }
        for (let k = (n - i) * 2 - 1; k >= 1; k--) {
            if (k === 1 || k === (n - i) * 2 - 1) {
               string += "*";
             }
             else {
               string += " ";
             }
            }
        string += "\n";
    }
    for (let i = 2; i <= n; i++) {
        for (let j = n; j > i; j--) {
            string += " ";
        }
        for (let k = 0; k < i * 2 - 1; k++) {
            if (k === 0 || k === 2 * i - 2) {
                string += "*";
            }else {
                string += " ";
            }
        }
        string += "\n";
    }
    return string 
}

//5 Given a string. Split it into words around the spaces and print them in an array. Word can be anything which is string․ If there is a sequence of spaces, the result will be empty strings.

function foo(str){
    const arr = [];
    let temp = '';
    for(let i = 0; i < str.length; i++){;
        if(str[i] === ' '){
            arr.push(temp);
            temp = '';
        }else{
            temp += str[i];
        }
    };
    if(temp){
    arr.push(temp);
    };
return arr;
}
console.log(foo('Somewhere over the rainbow'))


//6 Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function elemFrequency(arr){
    const obj = {}
    for(let i = 0; i < arr.length; i++){
        if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = 0
        }
            obj[arr[i]] = obj[arr[i]] + 1
    }

        for(let key in obj){
            obj[key] = obj[key] / arr.length
        }
        return obj
}

console.log(elemFrequency([1, 1, 2, 2, 3]))

//7 Print the following number pattern:

function numberPattern(n){
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <i; j++) {
            string += j;
        }
        string += "\n";
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            string += j;
        }
            string += "\n";
    }
    return string
}

console.log(numberPattern(5))


// 8 Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function countStrNum(arr){
    const obj = {
        string:0,
        number:0
    }
    for(let elem of arr){
        if(typeof elem === 'string'){
            obj.string++
        }else{
            obj.number++
        }
    }
    return `Numbers: ${obj.number}, String ${obj.string}`
}

console.log(countStrNum([1, 4, 'i am a string', '456']))


// Recursion

// 1 Write a recursive function to determine whether all digits of the number are odd or not.

function isOdd(num){
    if(num < 10 && num % 2 !== 0) return true
    if(num % 2 === 0){
        return false
    }
    return isOdd((num-num%10) / 10)
}

console.log(isOdd(7791))

//2 Given an array of numbers. Write a recursive function to find its minimal positive element. (if such element does not exist, return -1)․

function minPositive(arr){
    arr = arr.filter(elem => elem >= 0)
    if(arr.length === 0)return -1
    if(arr.length === 1)return arr[0]
    return minPositive(arr.slice(2).concat(arr[0] < arr[1] ? arr[0] : arr[1]));
} 



console.log(minPositive([-5, -9, -111, -1000, -7]))

//3 Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting order is violated.

function indexOfViolate(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return i + 1
        }
    }
    return -1
}

console.log(indexOfViolate([-9, -4, -4, 3, 12, 4, 5]))

//4Given an array. Write a recursive function that removes the first element and returns the given array. (without using arr.unshift())


function removeFirst(arr,newArr = []){
    if(arr.length < 2) return arr = []
    if(newArr.length === 1) return arr

    return newArr.length === 0 ? removeFirst(arr,arr.splice(0,1)): removeFirst()
}

console.log(removeFirst([6, 78, 'n', 0, 1]))

// 5 Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).


function flat(array, result = []) {
    if (array.length === 0) {
      return result
    }
    let first = array[0]
    let rest = array.slice(1)
    if (Array.isArray(first)) {
      return flat(first.concat(rest), result)
    }
    result.push(first)
    return flat(rest, result)
  }
  
  console.log(flat([14, [1, [[[3, []]]], 1], 0]))

// 6 Given an array and a number N.  Write a recursive function that rotates an array N places to the left. (Hint: to add element to the beginning use arr.unshift())

function rotate(arr,n){
    if(n === 0){
        return arr
    }
    if(n > 0){
        let first = arr.shift()
        arr.push(first)
        return (rotate(arr,n-1))
    }
    if(n < 0){
        let last = arr.pop()
        arr.unshift(last)
        return (rotate(arr,n+1))
    }                    
}


console.log(rotate(['a','b','c','d','e','f','g','h'], 3))

// 7 Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.

function sumOfDigit(num){
    if(num < 10){
        return num
    }
    let sum = 0
    while(num){
        let last = num % 10
        num = (num - num % 10)/10
        sum += last
    }
    return sumOfDigit(sum)
}

console.log(sumOfDigit(5))

