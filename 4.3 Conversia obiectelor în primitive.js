// let user = {
//     name: "John",
//     money: 1000, 
//     [Symbol.toPrimitive](hint){
//         // alert(hint);
//         switch(hint){
//             case "string":
//                 return 1;
//             case "number":
//             case "default":
//                 return this.money
//         }
        // return hint === "string" ? `name:${this.name}`  : this.money
    // },
// toString(){
//     return this.name
// },
// valueOf(){
//     return this.money
// },
// };
// alert(user)
// alert(user)//string
// alert(+user)//number
// alert(500 + user)//default
// alert("500" + user)//default

// recap

// home work

// let user = {
//     name: "John",
    // [Symbol.toPrimitive](hint) {
    // alert(`hint: ${hint}`);
    // return this.name;
    // },
//     toString() {
//     alert(`name: ${this.name}`);
//     return this.name;
//     }
//    };

//    alert(user);

//    alert(+user);
//    alert(user + 500)
   
// let user = {
//     name: "john",
//     valueOf() {
//     alert(`name: ${this.name}`);
//     return this.name;
//     }
//    };

//    alert(user);
//    alert(+user);


// let car = {
//     name: "Toyota",
//     weight: 1000,
//     speed: 200,
//     [Symbol.toPrimitive] (message) {
//     alert(`message: ${message}`);
//     return message =="string" ? `{name: "${this.name}"}` : this.weight;
//     }
//     };
//     alert(car);
//     alert(+car);
//     alert(car+500);

let car = {
    name: "Toyota",
    weight: 1000,
    speed: 200,

    toString() {
    return this.name;
    },
    valueOf() {
    return this.weight
    },
    // valueOf() {
    // return this.speed
    // }
    };
    alert(car);
    alert(+car);
    alert(car+500); 