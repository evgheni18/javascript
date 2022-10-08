// let user = { // un obiect
//   name: "John", // sub cheia „name” este valoarea „John”
//   age: 30, // sub cheia „age” este valoarea 30
//   isAdmin: true, 
//   delete: age
// };

// alert(delete user.age); 

// let constructorObject = new Object();
// constructorObject.userName = "John"
// constructorObject.age = 30;

// let literalObject = {
//     userName : "John",
//     age : 30,
// };

// delete literalObject.age;

// // alert(delete constructorObject.age)
// alert(delete literalObject);


// let user = {
//   name: "John",
//   age: 30
// };
// let key = prompt("ce nume", "age");
// alert( user[key] );

let fruit = prompt("Ce fruct de cumparat?", "orange");
let bag = {
 [fruit]: 5, // numele proprietății va fi luat din variabila fruit
};
alert(bag.apple); // 5, dacă fruit="apple"