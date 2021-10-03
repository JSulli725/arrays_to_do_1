//1. Push Front
// function insertVal(array, val){
//     for(var i= array.length; i > 0; i--){
//         array[i] = array[i-1];
//     }
//     array[0] = val;
//     console.log(array);
// }
// insertVal([1,5,8,2,7], 12);

//2. Pop Array
// function popFront(array){
//     var newArray = [];
//     for(var i = 0; i < array.length; i++){
//         if(i == 0){
//             newArray[i] = array[array.length-1];
//         }
//         newArray[i] = array[array.length-1 -i];
//     }
//     var poppy = newArray.pop();
//     console.log(poppy);
//     return poppy;
// }
// popFront([1,6,4,9,23]);

//3. Insert At
// function insertAt(array,index,val){
//     for(var i= array.length; i > 0; i--){
//         if(index > array.length){
//             console.log("provided index cannot be outside of given array");
//             break;
//         } else if(i == index){
//             array[i] = val;
//         } else if(i==index-1){
//             console.log(array);
//             break;
//         } else {
//             array[i] = array[i-1];
//         }
//     }
// }
// insertAt([1,5,8,2,7], 3, 12);


// Cool new discovery:
// function mirrorArray(array){
//     for(var i = 0; i < array.length; i++){
//         if(i == 0){
//             array[i] = array[array.length - 1];
//         } else {
//             array[i] = array[array.length - i -1];
//         }
//         console.log(array);
//     }
// }
// mirrorArray([1,6,4,9,23,51,8,6,11]);
