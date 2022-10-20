// let arr = Array();
// let array1 =[];

// let fruits = ["Apple","Lemon","Orange"];

// alert(fruits[0]);
// alert(fruits[1]);
// alert(fruits[2]);
// alert(fruits[3]);

// fruits[2] = "Chery";
// fruits[3] = "Kiwi";
// alert(fruits);
// alert(fruits.length);

// let array = ["Apple", 
//             {name: "Ion"}, 
//             true,
//             function(){alert("Hello")},
//             ]
// alert(array[1].name)
// array[3]()


// let fruits = ["Apple", "Lemon", "Orange"];
// alert(fruits.pop())
// alert(fruits.push("Kiwi"))
// alert(fruits.push("Kiwi", "Kiwi" , "Banana"))
// alert(fruits)
// alert(fruits[fruits.lenght] = "Kiwi")
// alert(fruits)
// alert(fruits.shift())
// alert(fruits.unshift("Kiwi" , "Banana"))
// let array2 = fruits
// alert(fruits === array2)
// array2.push("Banana")
// alert(fruits)
// fruits[99999] = 25
// alert(fruits[9999]) undefined 
// fruits.age = 25

// for(let value in fruits){
//     alert(fruits[value])
//     alert(value)
// }

// for(let i = 1; i < fruits.length; i++){
//     alert(i)
//     alert(fruits[i])
// }

// for(let value of fruits){
//     alert(value)
// } 

// let user = {
//     age:17,
//     name: "John",
// }
// for (let key of user){
//     alert(key)
//     alert(user[key])
// }

// recap 
// let fruits = ["Banana", "Apple"]
// let arr = fruits; // copiat prin referință (două variabile se referă la aceeați matrice)
// alert( arr === fruits ); // true
// arr.pop("Apple"); // matricea se modifică prin referință
// alert( fruits ); // Banana, Apple

// let fruits = ["Apple", "Lemon", "Orange"];
// for (let key in arr) {
//    alert(fruits) 
//    alert( arr[key] );
// }

// let fruits = []; // creează o matrice
// fruits[0] = 5; // creăm o proprietate cu un index mult mai mare decât lungimea matricei
// fruits.age = [250000]; 
// alert(fruits)         // pagina 20  

// homework

// let fruits = ["Apple", "Lemon"];
// let shoppingCart = fruits;
// shoppingCart.push("Orange");
// alert( fruits.length ); // va afisha doar lungimea 3, dar nu trebuia sa fie 2 daca se incepe de la 0?
// alert(fruits);

// let arr = ["a", "b"];
// arr.push(function() {
//  alert( this );
// })
// arr[2]();
/* Apelul arr[2]() este sintactic vechiul obj[method](), în rolul de obj avem arr, iar în rolul de metodă avem 2.

Deci avem un apel al funcției arr[2] ca metodă obiect. Desigur, primește această referință la obiectul arr și scoate matricea:*/