// let map = new Map;
// map.set("1" , "str1");
// map.set(1, "num1");
// map.set(0, "num0");
// map.set(false, "boolean");

// alert (map.get("1"))
// alert(map.has(false));
// map.clear()
// alert(map.size)

// let john = {name: "John" }
// map.set(john, 123).set(1, 1)
// alert(map.get(john));

// let recieveMap = new Map([
// ["a", 500],
// ["b", 300],
// ["c", 30]
// ]);

// for(let key of recieveMap.keys()){
//     alert(key);
// }

// let object = {
//     name: "John",
//     age: 30
// }
// let map = new Map(Object.entries(object));
// alert(map.get("name"));

// let prices = [
// ["a", 500],
// ["b", 300],
// ["c", 30]
// ]
// let obj = Object.fromEntries(prices)
// alert(obj.a)

// let map = new Map
// map.set ("banana", 1).set("orange", 2).set("kiwi",3);
// let obj = Object.fromEntries(map.entries());
// alert(obj.kiwi);

// let set = new Set()
// let John = {name: "John"};
// let pete = {name: "pete"};
// let mary = {name: "mary"};
// set.add(John);
// set.add(pete);
// set.add(mary);
// set.add(John);
// set.add(mary);
// alert(set.size);

// for(let user of set){
// alert(user.name);
// }

// let array = [1, 2, 2, 4, 4 ]
// let set = new Set(array);                             //dublicat
// for(let value of set){
//     alert(value)
// }

// recap

// let recipeMap = new Map([
//     ["a", 500],
//     ["b", 350],
//     ["c", 50]
//    ]);
//    for (let key of recipeMap.keys()) {
//     alert(key); // a, b, c
//    }
//    for (let value of recipeMap.values()) {
//     alert(value); // 500, 350, 50
//    }
//    // iterașie peste elementele format [key, value]
//    for (let entry of recipeMap) { // la fel ca si recipeMap.entries()
//     alert(entry); // a,500 (...)
//    }

//    recipeMap.forEach((value, key, map) => {
//     alert(`${key}: ${value}`); // a: 500 ...
//    });

let obj = {
    name: "John",
    age: 30
   };
   let map = new Map(Object.entries(obj));
// alert(map.name)   

// home work 

function unique(arr) {
    let set = new Set(arr);
    return Array.from(set)
   }
   let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
   ];
   alert(unique(values)); 