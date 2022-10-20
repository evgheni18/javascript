// let id = Symbol();
// let id1 = Symbol("id");
// let id2 = Symbol("id")
// alert(id.toString());
// alert(id1.description);
// alert (id1 == id2);

// let user = {
//     name: "John",
//     // [id]: Symbol("id")
//     age: 30,
// }

// let id = Symbol("id");
// let id1 = Symbol("id");
// user[id] = 1;
// user[id1] = 2;
// let clone = Object.assign({}, user)

// // for (let key in user){
// //     alert(key)
// // }
// // alert(user[id1]);
// alert(clone[id1])

// let id = Symbol.for("name");
// let id1 = Symbol.for("id");
// alert(id == id1)
// alert(Symbol.keyFor(id))
// alert(Symbol.keyFor(id2)) //va fi undefined pentru ca nu este 

// recap
// let user = {
//     name: "Ion"
//    };
//    let id = Symbol("id");
//    user[id] = 1;
//    alert( user[id] );

// let id = Symbol("id");
// let user = {
//  name: "Ion",
//  [id]: 123 // simplu "id: 123" nu va funcționa
// };
// alert(user[id]);

// let str = Symbol("str");
// let user = {
//  name: "Ion",
//  age: 30,
//  [str]: 123
// };
// for (let key in user) alert(key); // name, age (proprietățile cu simbol cheie nu sunt printre listate)
// // deți accesul direct de către symbol funcționează
// alert( "Direct: " + user[str] );

// let id = Symbol("id");
// let user = {
//  [id]: 123
// };
// let clone = Object.assign({}, user);
// alert( clone[id] ); // 123

// homework
Symbol("foo") === Symbol("foo"); //false este 
// var sym = new Symbol(); ///error
// Symbol.for("foo") === Symbol.for("foo")// true este global