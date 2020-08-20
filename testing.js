//REPLACE WITH
const replaceWith = (string,cha1,cha2) => {
    let replaced = ''
    for (let i = 0; i < string.length; i++){
        if (string[i] === cha1){
           replaced += cha2
           continue
        }
        replaced += string[i]
    }
    return replaced
}
replaceWith("awesome", "e", "z")



//EXPAND
const expand = (arr,val) => {
    let newArr = []
       for (let i = 0; i < val; i++){
           for (let j = 0; j < arr.length; j++){
               newArr.push(arr[j])
           }
       }
       return newArr
    }

expand([1,2,3],3)
expand(["foo", "test"],1)




//ACCEPT NUMBERS ONLY
function acceptNumbersOnly() {
    var i = 0,
        len = arguments.length;
    for (; i < len; i += 1) {
        if (typeof(arguments[i]) !== 'number' || Number.isNaN(arguments[i])) {
            return false
        }
     }
    return true
}
acceptNumbersOnly( 2, 3, 4, NaN)



//MERGE ARRAYS
const mergeArrays = (arr1,arr2) => {
    let newArr = arr1.concat(arr2)
    return newArr.sort()
}
mergeArrays([2,1],[3,4])



//MERGE OBJECTS
const mergeObjects = (obj1,obj2) => {
    let obj3 = {
        ...obj1,
        ...obj2
    }
    return obj3
}
console.log(mergeObjects({name:'Foo',num:33},{test:'thing',num:55})) 