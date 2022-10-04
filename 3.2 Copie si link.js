let message = "hello";
let phrase = message;
phrase = "john";
// alert (message);

let user = {
    name: "John",
    age: 30,
}
let admin = user;
// admin.name = "Hello"
// alert(user.name);

let a = {};
let b = a;
let c = {};
let clone = {};

for (let key in user){
    clone [key] = user[key];
}
clone.name = "Petru";
// alert (user.name);
let permission1 = {canView:true}
let permission2 = {canEdit:true}
// user.canView = permision1.canView
// alert (a == b); 
// alert (a === b);
// alert  (a == c);
Object.assign(user, permission1, permission2,{name: "Ion"})
permission2.canView = false;
// alert (user.canView)
// alert (user.canEdit)
// alert (user.name)

let clone1 = Object.assign({}, permission1, permission2)
user.size ={
    height: 182,
    width: 50,
}
// alert(user.size.width);
let clone2 = Object.assign({}, user)
// alert(clone2.size.width)
// user.size.width = 80;
user.size ={
    height: 90,
    width: 1,
}

alert(clone2.size.width)