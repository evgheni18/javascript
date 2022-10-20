let john = {
    name: "John"
}

// let array = [john]
// john = null;
// alert(array[0].name)
// alert(john)

let map = new Map()
map.set(john, 1)
john = null;
// alert(map.values())
// for (let value of map.values()) {
// alert(value)
// }

let weakMap = new WeakMap();
let object = {
    name: "john"
};
weakMap.set(object, 1);
object = null;
// alert(weakMap.has(object))

// weakMap.set(1, 1)

let john1 ={
    name: "john"
}
let pit = {
    name: "pit"
}
let marry = {
    name: "marry"
}
let visitedSet = new WeakSet()
visitedSet.add(john1)
visitedSet.add(pit)
visitedSet.add(marry)
alert(visitedSet.has (marry));
marry = null
alert(visitedSet.set(marry));
visitedSet.add(function(){}); //lucreaza ca type of function = object