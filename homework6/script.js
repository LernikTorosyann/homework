// 1 Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function getMaxProd(arr){
    const newArr = []
    for(let i = 0; i < arr.length - 1; i++){
        newArr.push(arr[i] * arr[i+1])
    }
    return newArr.reduce(function (acc, elem) {
        return ( acc > elem ? acc : elem );
      });
}
console.log(getMaxProd([7,8,6,15,2,6,9,11]))

//2 Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.

function findMiss(arr){
    let count = 0;
    let max = arr.reduce(function (acc, elem) {
        return ( acc > elem ? acc : elem );
      });
    let min = arr.reduce(function (acc, elem) {
        return ( acc < elem ? acc : elem );
    });
    for(let i = min; i < max; i++){
        if(!arr.includes(i)){
            count++
        }
    }
    return count
}

console.log(findMiss([7,1]))


//3 Convert a long phrase to its acronym.

function acronym(str){
    let res = '' + str[0].toUpperCase()
    for(let i = 0; i < str.length; i++){
        if(str[i] === ' '){
            res = res + str[i+1].toUpperCase()
        }
    }
    return res
}

console.log(acronym("Have a good night"))


//4 Given a string of digits, output all the contiguous substrings of length n in that string.

function contSubstrings(str,n){
    let newStr = ''
    const arr = []
    for(let i = 0; i <= str.length - n; i++){
        newStr = str.substring(i,i + n)
        arr.push(newStr)
    }
    return arr
}

console.log(contSubstrings('495215',3))



// 5Given a word, compute the scrabble score for the given word. To calculate scrabble score use the following table of scores:

function scrabbleScore(str){
    let res = 0;
    const scores = ['aeioulnrst','dg','bcmp','fhvwy','k','jx','qz']
    for(let i = 0; i < scores.length; i++){
        for(let j = 0; j < scores[i].length; j++){
            let elem = scores[i]
            if(str.includes(elem[j])){
                res = res + i + 1
            }
        }
    }
    return res
}

console.log(scrabbleScore('quick'))


//6 Implement the classic method for composing secret messages called a square code.

function scuareCode(str){
    str = str.replace(/[^a-zA-Z0-9]+/g,'').toLowerCase()
    const rows = Math.ceil(Math.sqrt(str.length));
    const cols = Math.ceil(str.length / rows);
    let scuareStr = '';
    for (let i = 0; i < str.length; i += rows){ 
        scuareStr += str.substring(i,rows + i);
        scuareStr += '\n';
    }
    return scuareStr
}

console.log(scuareCode('If man was meant to stay on the ground, god would have given us roots.'))

//7Create an implementation of the rotational cipher, also sometimes called the Caesar cipher.

function caesarCipher(str){
    const arr = []
    for(let i = 0; i < str.length; i++){
        arr[i] = str[i + 13]
        if(arr[i] === undefined){
            arr[i] = str[i-13]
        }
    }
    return arr.join('')
}

console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz'));

let arr = [1,2,3,45,5]

let newArr = []

newArr[0] = arr[4]
console.log(newArr[0])















