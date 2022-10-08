// let constructorObject = new Object();
// constructorObject.userName = "John"
// constructorObject.age = 30;

// let literalObject = {
//     userName : "John",
//     age : 30,
// };

// alert(constructorObject.userName);
// alert(literalObject.userName);

// alert(constructorObject.age);
// alert(literalObject.age);


// constructorObject.isAdmin = true;
// literalObject.isAdmin = true;

// alert(constructorObject.isAdmin);
// alert(literalObject.isAdmin);

// delete constructorObject.age;
// delete literalObject.age;

// alert(delete constructorObject.age)
// alert(delete literalObject.age);

// let user ={
//     userName : "John",
//     age: 30,
//     "likes birds" : true,
// }
// const book = {
//     name : "java",
// }
// book.name = "Rust";
// alert(book.name);
// let key = "likes birds"
// alert(user["likes birds"]);
// alert ([`${key}`])
// user ["likes birds"] =false;
// alert(user["likes birds"]);
// delete user["likes birds"]

// let key = prompt("adauga o chei", "")
// alert(user[key]);
// alert(user.key); 

// let fruit = prompt("fructul preferta", "");
// let bag ={
//     [fruit] : 5,
// }
// alert(bag.apple);

// function makeUser(name, age){
//     return{
//         name : name,
//         age : age,
//     }
// }
// let user1 = makeUser("John", 30)
// // alert(user1.name)
// // alert(user1.age)

// let obj = {
// for : 1,
// let : 2,
// const :3,
// __proto__ :8,
// }
// alert(obj.__proto__);

// let user = {
//     null : "john",
//     // age : 30,
//     lastName : null,
//     [1 > 17] : 30,
// }

// // alert("age" in user );

// alert(user[2 > 3]);

// let user = {
//     name: "John"
//     age: 30,
//     isAdmin: true,
// }
// for (let key in user) {
//     alert(key);
//     alert (user[key]);
// }

// recap


// function makeUser(name, age) {
//     return {
//     name: "John", // la fel ca name: name
//     age: 25, // la fel ca age: age
    // ...
//     };
// }
// alert(makeUser.name + makeUser.age);

// let user = {};
// alert( user.noSuchProperty = undefined ); 

// let user = { name: "John", age: 30 };
// alert( "age" in user ); // true, user.age există
// alert( "test" in user );

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//    };
//    for (let key in user) {
//     // cheile
//     // alert( key ); 
//     alert(user[key])
//    }

// alert( String(Math.trunc(Number("+4.9"))) );
// alert(Array);
const user = {
    name: "John"
   };
   // va funcționa aceasta expresie?
   user.name = "Pete";
   alert(user.name);

//    let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

// alert(sum);