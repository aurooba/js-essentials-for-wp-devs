// mutability in objects

var array1 = [2, 4, 6]
var array2 = [...array1]
console.log(array1, array2);
array2[0] = 100
console.log(array1, array2);