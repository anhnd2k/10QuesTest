
export const findMax = (data) => {
    var max = parseInt(data[0])
    var index = -1
    for(var i=0; i<data.length; i++){
        if(max < data[i]){
            max = data[i]
            index = i
        }
    }
    return [max, index ];
}

export const checkIndex = (number, array) => {
    var check = []
    var result = -1
    for(var i=0; i< array.length; i++){
        if(number == array[i]){
            check.push(i)
        }
    }
    if(check.length>1){
        result =10
    }
    return result
}


export const findMin = (data) => {
    var min = parseInt(data[0])
    for(var i=0; i<data.length; i++){
        if(min > data[i]){
            min = data[i]
        }
    }
    return min;
}

export const sortUpAscending = (data) => {
    var array = data
    for(var i=0; i<array.length-1; i++){
        for(var j=i; j<array.length; j++){
            var result = 0
            if(parseInt(array[i]) > parseInt(array[j])){
                result = array[i]
                array[i] = array[j]
                array[j] = result
            }
        }
    }
    return array;
}

export const sortDownAscending = (data) => {
    var array = data
    for(var i=0; i<array.length-1; i++){
        for(var j=i; j<array.length; j++){
            var result = 0
            if(parseInt(array[i]) < parseInt(array[j])){
                result = array[i]
                array[i] = array[j]
                array[j] = result
            }
        }
    }
    return array;
}

export const returnArray = (to, from, array) => {
    var arrayResult = []
    for (var i=to; i<from; i++){
        arrayResult.push(array[i])
    }
    return arrayResult;
}

export const checkArray = (array) => {
    var result = -1;
    for(var i=0; i< array.length-1; i++){
        for(var j=i; j< array.length; j++){
            if(array[i] > array[j]){
                result +=1
            }
        }
    }
    return result
}

export const filterArray = (arr, n) => {
    var arrResult = []
    for(var i=0; i<arr.length; i++){
        if(arr[i] !==n && arr[i] < n){
            arrResult.push(arr[i])
        }
    }
    return arrResult;
}
