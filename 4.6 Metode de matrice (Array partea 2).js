// let array = [1, 2, 3, 0, false, NaN];
// array.forEach(alert)
// array.forEach ((_value, index)=>{
//     // alert(`${value}, ${index}, ${array}`)
//     alert(index +1)
// })
// alert(array.indexOf(7))
// alert(array.includes(0));
// alert(array.includes(NaN));
// alert(array.lastIndexOf(0));
// alert(array.lastIndexOf(NaN));

// let users = [
//     {id: 1, name: "a"},
//     {id: 2, name: "b"},
//     {id: 3, name: "c"},
// ]
// let user = users.find((value)=>value.id <5)
// alert(user?.name)

// let index = users.findIndex((value)=>value.id === 2)
// alert(index);

// let result = users.filter((value)=> value.id < 5)
// result.forEach((value)=> alert(value.name))

// let x = [1, 2, 3, 4]

// let value = x.some((value)=>value == 1)
// alert(value)

// let lenghts = ["hello", "Hi", "salut"].map((value) => {
//     if (value === "salut")
//        return value
// });
// alert(lenghts);

// let array = [1, 2, 3, 4, 5, 6]
// let par = ""
// array.forEach ((value) =>{
//     if(value %2 == 0){
//         par.push(value)
//     }
// })
// let users = array.map((value) =>{
//     return{
//         id: value,
//         name: value.lenght
//     }
// })
// alert(users)

// let array = [1, 2, 15, undefined]
// function compare(a,b){
//     if (a>b){
//         return 1
//     }
//     if(a<b){
//         return -1
//     }
// return a - b
// }
// array.sort((a, b) => a - b)
// alert(array)
// alert(array.reverse())
// let names = "John,Anna,Pit"
// let array = names.split("," ,names.length)
// alert(array)

// let array = ["John", "Anna", "Pit"];
// let str = array.join(",")
// alert(str)

// let array = [1, 2, 3]
// let sum = array.reduce((acc, cv) =>{
// return acc+= cv
// },0)

// let arr1 = []
// let sum = array.reduce((acc, cv)=> acc +=cv)
// alert(sum)

// recap

// let result = arr.map(function(item, index, array) {
//     // se returnează o nouă valoare în locul unui element
//    });
//    let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
//    alert(lengths); // 5,7,6

// let arr = [ 1, 2.1, 15 ];
// metoda sortează conținutul arr
// arr.sort();
// alert(arr); // 1, 15, 2


// let arr = [7, 4, 8, 1]
// arr.reverse();
// alert(arr);
// arr.sort((a, b) => a - b)
// alert(arr);
// let arr = []
// let result = arr.reduce((sum, current) => sum + current 1);
// alert(result);

//homework


// function filterRangeInPlace(arr, a, b)
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // au eliminat numere în afara intervalului 1..4
// alert(arr); // [3, 1]


// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a )
// alert(arr); // 8, 5, 2, 1, -10

// function copySorted(arr){
//     return arr.sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (fără modificări)

