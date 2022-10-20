// let fruits = []
// fruits[1] = "apple"
// alert(fruits.length)

// let array = [1,2,3,4,5];
// array.length = 2
// alert(array)
// array.length = 4
// alert(array)

// let array = new Array[5];
// alert(array.length)
// alert(array)

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]
// alert(matrix[2][1])
// alert(matrix.toString)
// for(let i = 0; i< matrix.length; i++){
// let isFive = false;
// for(let j = 0; j< matrix[i].length; j++){

//     if(matrix[i][j]==5){
//         alert(matrix[i][j])
//         isFive =true;
//     break
//     }
// }
// if (isFive === true){
//     break
// }
// }



// let array =[1, 2, 3, {age:17}]
// alert(array.toString())
// alert(String(array) ==="1,2,3");
// [].toString() =""
// alert([1.1] + 1);


// let arr =["I", "go", "home"]
// arr.splice(1, 2)
// alert(arr);
// alert(arr.length);
// delete arr[1];
// alert(arr);
// alert(arr.length);

// let arr1 = ["I", "go", "home"]
// arr1.splice(0,3, "Go");
// alert(arr1)

// let arr3 = [1, 2]
// alert(arr3.concat([3,4], [4, 5], 7, 8));
// let arrLike = {
//     0: "a",
//     length: 1,
//     [Symbol.isConcatSpreadable]: true,
// }
// alert(arr3.concat(arrLike));
// recap 

// let arr4 = arr3.slice();
// alert(arr3 === arr4);
// alert(arr4);

// let arr = [1, 2, 3, 4, 5];
// arr.length = 2; // scurtează la două elemente
// alert(arr); // [1, 2]
// arr.length = 5; // lungimea de întoarcere așa cum a fost
// alert(arr[3]); // undefined: valorile nu s-au recuperat

// let arr = new Array(2); // dacă va fi creată matricea [2].?
// alert(arr[0]); // undefined! nici un element.
// alert(arr.length); // length 2
//pagina 7

// let arr = [1, 2, 3];
// alert(arr); // 1,2,3
// alert(String(arr) === "1,2,3") // true

// let arr = ["I", "learn", "JavaScript"];
// arr.splice(3,1); // pornind de la pozișia(index) 1, elimină 1 element
// alert(arr); // a rămas ["I","JavaScript"]

// let arr = ["v", "e", "s", "t"];
// alert(arr.slice(1, 3)); // e,s (copie de la 1 pînă la 3)
// alert(arr.slice(-2));// s,t (copie de la -2 pînă la urma)


// let arr = [1, 2, 3];
// alert(arr); 
// alert(String(arr) === "1,2,3" );

// let arr = ["I", "learn", "JavaScript"];
// arr.splice(0, 2); // pornind de la pozișia(index) 1, elimină 1 element
// alert(arr); // a rămas ["I","JavaScript"]

// let arr = ["I", "learn", "JavaScript", "now"];
// // eliminași primele 3 elemente și inlocuiti-le cu altele
// arr.splice(4, 2, "go", "play");
// alert(arr) // acum ["go", "play", "now"]

let arr = ["t", "e", "s", "t"];
// alert(arr.slice(1, 3)); // e,s (copie de la 1 pînă la 3) dar de ce e de la 1 si nu e inclusiv 1?
alert(arr.slice(-2)); // s,t (copie de la -2 pînă la urma)
