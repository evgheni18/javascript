/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
// function HELLO () {
// alert ("hello");

// }
// HELLO();
// const a = 0;
// a = 1;


// var n = -1
// if (n < -2) 
// alert(`Gradul ${n} nu este acceptat`);

// let str = `
//   Grupul de lucru Ecma International TC39 -
//   este un grup de dezvoltatori JavaScript, teoreticieni și autori de motoare JavaScript,
//   sunt implicați în întreținerea și dezvoltarea limbajului JavaScript.
// `;
// alert (`${str}`);

// function pow(x, n) {
//     let result = 2;
//     //              <--
//     for (let i = 1; i < n; i++) {
//       result **= x;
//     }
//     //              <--
//     return result;
//   }
//   alert(pow (6,2))

function pow(x, n) {
    if (n < 0) {
      alert(Valorile n negative nu sunt acceptate);
    } else {
      let result = 1;
  
      for (let i = 0; i < n; i++) {
        result *= x;
      }
  
      return result;
    }
  }

function pow(x, n) {
    if (n < 0) {
      alert(pow(1,2));
      return;
    }
  
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
// recap

// function pow(x, n) {
//     if (n < 0) {
//       alert("Negative 'n' not supported");
//     } else {
//       let result = 1;
  
//       for (let i = 0; i < n; i++) {
//         result *= x;
//       }
  
//       return result;
//     }
//   }
