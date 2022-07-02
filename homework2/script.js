// map

function myMap(arr,callback){
    const res = []
    for(let i = 0; i < arr.length; i++){
        res[i] = callback(arr[i], i, arr);
    }
    return res;
}


// filter

function myFilter(arr,callback){
    const res = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
            res.push(arr[i])
        }
    }   
    return res
}


// forEach

function myForEach(arr,callback){
    for(let i = 0; i < arr.length; i++){
        arr.push(callback(arr[i],i,arr))
    }   
}


// every

function myEvery(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i],i,arr)){
            return false
        }
    }
    return true;
}


// some

function mySome(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],index,arr)){
            return true
        }
    }
    return false;
}

// find

function myFind(arr,callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i],i,arr)){
            return arr[i]
        }
    }
    return undefined;
}


// flat

function myFlat(arr) {
    let res = [];
    (function flat(arr) {
        arr.forEach(function(elem) {
        if(Array.isArray(elem)){
            flat(elem);
        }else{
            res.push(elem)
        };
      });
    })(arr);
    return res;
}

// indexOf

function myIndexOf(arr,arg){
    for(let i = 0; i < arr.length; i++){
        if(arg === arr[i]){
            return i
        }
    }
    return -1
}

//pop

function myPop(arr){
    let last = arr[arr.length - 1]
    arr.length = arr.length -1;
    return last;
}

// reduce 

function myReduce(arr, callback, acc) {
    let startAtIndex = 0;
    if (acc === undefined) {
      acc = arr[0];
      startAtIndex = 1;
    }
    for (let i = startAtIndex; i < arr.length; i += 1) {
      acc = callback(acc,arr[i], i, arr);
    }
    return acc;
}


//slice

function mySlice(arr, start = 0, end = arr.length) {
    const resArr = [];
   
    for (let i = start; i < end; i++) {
      if (i < arr.length) {
        resArr.push(arr[i]);
      }
    }
   
    return resArr;
}

// join

function myJoin(arr, joinWith = '') {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
          str += arr[i];
          str += joinWith;
    }
    return str;
};

//fill

function myFill(arr, value, start = 0, end = arr.length) {
    for (let i = start; i <= end; i++) {
        arr[i] = value;
    }
    return arr;
}

