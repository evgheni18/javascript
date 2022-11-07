// let john = {
//     name: "John"
// }

// // let array = [john]
// // john = null;
// // alert(array[0].name)
// // alert(john)

// let map = new Map()
// map.set(john, 1)
// john = null;
// // alert(map.values())
// // for (let value of map.values()) {
// // alert(value)
// // }

// let weakMap = new WeakMap();
// let object = {
//     name: "john"
// };
// weakMap.set(object, 1);
// object = null;
// // alert(weakMap.has(object))

// // weakMap.set(1, 1)

// let john1 ={
//     name: "john"
// }
// let pit = {
//     name: "pit"
// }
// let marry = {
//     name: "marry"
// }
// let visitedSet = new WeakSet()
// visitedSet.add(john1)
// visitedSet.add(pit)
// visitedSet.add(marry)
// alert(visitedSet.has (marry));
// marry = null
// alert(visitedSet.set(marry));
// visitedSet.add(function(){}); //lucreaza ca type of function = object

// let message = "hello";
// alert(message);
let message = "";
alert(prompt `${message}`)


//recap

// let visitedSet = new WeakSet();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
// visitedSet.add(john); // John a venit la noi
// visitedSet.add(pete); // apoi Pete
// visitedSet.add(john); // John iarăși
// // visitedSet în prezent conșine doi utilizatori
// // verificași dacă John este autentificat ?
// alert(visitedSet.has(john)); // true
// // verifică dacă Mary a venit?
// alert(visitedSet.has(mary)); // false
// john = null;
// structura de date visitedSet va fi ștearsă automat

// homework

// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//    ];
//    let weakSet = new WeakSet();
//    weakSet.add(messages[0]);
//    weakSet.add(messages[1]);
// alert(weakSet.has(messages[0]));
// alert(weakSet.has(messages[1]));
// messages.shift(0)
// alert(weakSet.has(messages[0]));

