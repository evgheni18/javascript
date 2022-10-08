function User(name){
    // this = {}
    this.name = name;
    this.isAdmin = false;
}
// let user = new User("John");
// alert(user.name)
// alert(user.isAdmin)
let user1 = new User("John");
let user2 = new User("Hello");


// let user3 = new function() {
// this.name = "John";
// }
// alert(user3.name)

// function BigUser(){
//     this.name = "John";
//     return {name: "Hello"}
// }
// function SmallUser(){
//     this.name = "John";
//     this.sayHi = function(){
//         alert(this.name)
//     }
//     return 1
// }

// alert(new SmallUser().sayHi())

// homework 
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );