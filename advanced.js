// 1.Nested Array Access:

// Question: "If nestedArray is [[1, 2], [3, 4]], what is the value at index 1,0?"
// Output: 3

// nestedArray=[[1, 2], [3, 4]];
// console.log("nestedArray",nestedArray[1][0])

// ============================================


// 2.Array Sorting with Custom Logic:

// // Question: "If objArray is [{ num: 3 }, { num: 1 }, { num: 5 }], what is the array after sorting based on the 'num' property?"
// // Output: [ { num: 1 }, { num: 3 }, { num: 5 } ]
// objArray=[{ num: 3 }, { num: 1 }, { num: 5 }];
// // for(i=0;i<=objArray.length;i++) {
// //     console.log("dcd",i)
// // }
// const array1=[];
// for(obj in objArray){
//     // console.log("obj",obj,objArray[obj]);
//     array1.push(objArray[obj].num)
//     // console.log(array1)
// }
// array1.sort();
// // console.log("array1.sort();",array1.sort());
// const sortedArray=[];
// for(i in array1){
//     // if(i===)
//     for(j in objArray){
//         if(array1[i]===objArray[j].num){
//             sortedArray.push(objArray[j]); 
//             console.log("==",sortedArray)
//         }
//     }
// }
// console.log("objArray_sortedArray",sortedArray)



// =========================================

// 3.Matrix Transposition:
// Question: "If matrix is [[1, 2, 3], [4, 5, 6], [7, 8, 9]], what is the transposed matrix?"
// Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]

// matrix=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let mainArray=[];
// let subArray1=[];
// let subArray2=[];
// let subArray3=[];

// for(x in matrix){
//     subArray1.push(matrix[x][0]);
//     subArray2.push(matrix[x][1]);
//     subArray3.push(matrix[x][2]);

// }
//     mainArray.push(subArray1,subArray2,subArray3)
//     console.log("main_array",mainArray)//main_array [ [ 1, 4, 7 ], [ 2, 5, 8 ], [ 3, 6, 9 ] ]


    // =====================================================


    // 4.Search and Update:

    // Question: "If objArray is [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Doe' }],
    //  what is the array after updating the name of the object with id 2 to 'Janet'?"

    // objArray=[{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Doe' }];

    // for(obj in objArray){
    //     if(objArray[obj].id===2){
    //         objArray[obj].name='Janet';
    //     }
    // }
    // console.log("replace name",objArray)



    // =================================================


    