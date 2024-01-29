// 1.Array Slice:

// Question: "If myArray is [10, 25, 30, 40, 50], what is the result of slicing it from index 2 to 5?"
// Output: [30, 40, 50]

// let myArray=[10, 25, 30, 40, 50];
// let splicedValues=myArray.slice(2,5);
// console.log("splice from2 to 5",splicedValues);
// console.log("after splice from2 to 5",myArray);


// ======================================

// 2.String Substring:

// Question: "For the string let myString = 'Hello';, what is the substring from index 3 to 7?"
// Output: lo

// myString = 'Hello';
// sub_string=myString.substring(3,7);
// console.log("sub_string,",sub_string);
// console.log("after sub_string,",myString)

// =================================

// 3.Array Concatenation:

// Question: "If myArray is [10, 25, 30, 40, 50], and you concatenate it with [60, 70], what is the resulting array?"
// Output: [10, 25, 30, 40, 50, 60, 70]

// myArray=[10, 25, 30, 40, 50];
// myArray2=[60, 70]
// resulting_array=myArray.concat(myArray2);
// console.log("resulting_array",resulting_array)

// ==============================================

// 4.Array Splice:

// Question: "If myArray is [10, 25, 30, 40, 50], what is the array after using splice to remove elements from index 2 and insert 35 and 45?"
// Output: [10, 25, 35, 45, 50]

myArray=[10, 25, 30, 40, 50];
myArray.splice(2,2,35,45);
console.log("slice to remove",myArray)