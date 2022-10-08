// var userName = "John"

// let user = {
//     name: "John",
//     age: 30,
//     sayHi: function() {alert(this.name);
//     const arrow = () => {alert(this.userName)}
//     arrow()
//     }
    // sayHi: function(){alert(this.name)}
// }
// sayHi();
// user.sayHi = function(){
//     alert("hello")
// }
// let admin = user;
// admin.name = "Admin";
// user = null;
// admin.sayHi();
// user.sayFunction = sayFunction;
// user.sayFunction();
// function sayFunction(){
//     alert("sayFunction");
// }

// let admin1 = {
//     name: "Admin",
// }
// // user.f = sayHi;
// // admin1.f = sayHi;
// const sayHi = () => {
//     alert(this.userName)
// }

// sayHi();

// user.sayHi();
// user.f();
// admin1.f();


// recap
// let user1 = {
//     name: "John",
//     age: 30,
//     sayHi: function(){
//         alert(this.age);
//     }
//    let admin = user1,
//    user = null,
//    admin.name = "hi"
// const user1 = {
//     sayHi: function() {
//     alert("Hello");
//     }
//    };

//    user1 = {
//     sayHi() {
//     alert("Hello");
//     }
//    };
// sayHi() {
//     // this -"obiectul current"
//     alert(this.name);
//     }
//    };
//    user.sayHi(); // John
// }
// admin.sayHi();

// let user = {
//     firstName: "John",
//     sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//     }
//    };
//    user.sayHi(); // John
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi();
  
// homework

// let ladder = {
//     step: 3,
//     up() {
//     this.step++;
//     },
//     down() {
//     this.step--;
//     },
//     showStep: function() {
//     alert( this.step );
//     }
//    };

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0


// recap

// let user = {
//     name: "John",
//     age: 30,
//     sayHi() {
//     alert( user.age ); //va avea ca rezultat o eroare
//     }
//    };
// //    user.sayHi();
//    let admin = user;
//    user = null;
//    admin.sayHi();


// let user = { name: "John" };
// let admin = { name: "Admin" };
// function sayHi() {
//  alert( this.name );
// }
// // folosim aceeați funcție în două obiecte
// user.z = sayHi;
// admin.z = sayHi;
// // „this” în interiorul funcției este o referință la obiectul care este specificat
// // „înainte de punct”
// user.z(); // John (this == user)
// admin.z();


// let user = {
//     firstName: "John",
//     sayHi() {
//     let arrow = () => alert(this.firstName);
//     arrow();
//     }
//    };
//    user.sayHi(); // John

let ladder = {
    step: 0,
    up() {
    this.step++;
    },
    down() {
    this.step--;
    },
    showStep: function() {
    alert( this.step );
    }
   };
   ladder.up()