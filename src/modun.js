
export const findMax = (data) => {
    var max = parseInt(data[0])
    for(var i=0; i<data.length; i++){
        if(max < data[i]){
            max = data[i]
        }
    }
    return max;
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
