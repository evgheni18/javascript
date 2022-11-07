// let user = {
//     name: "John",
//     age: 30,
//     [Symbol("test")]:1
// }
// for(let key of Object.keys(user)){
// alert(key);
// }
// for(let value of Object.keys(user)){
// alert(value);
// }
// for(let [key, value] of Object.entries(user)){
// alert(key + value);
// }


// recap

// homework
// function sumSalaries(salaries) {

//     let sum = 0
//     for (let salary of Object.values(salaries)) {
//       sum += salary;
//     }
  
//     return sum;
//   }

//   function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b)
//   }
  
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert( sumSalaries(salaries) );

//   function count(obj) {
//     return Object.keys(obj).length;
//   }
//   let user = {
//     name: "John",
//     age: 30
//   };
  
//   alert( count(user) );


