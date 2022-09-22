// let a = 2 + 1;
// switch (a) {
//   case 3:
//     alert( 'Insuficient' );
//     break;
//   case 4:
//     alert( 'Exact!' );
//     break;
//   default:
//     alert( "Nu există astfel de valori" );
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Insuficient' );
//   case 4:
//     alert( 'Exact!' );
//   case 5:
//     alert( 'Prea mult' );
//   default:
//     alert( 'Nu există astfel de valori' );
// }


// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("Va fi executat, deoarece valoarea lui + a este 1, care este exact b + 1");
//     break;
//   default:
//     alert("Acest lucru nu se va executa");
// }

// let a = 2 + 2;
// switch (a) {
//   case 4:
//     alert('Corect!');
//     break;
//   case 3: // (*) grupează pe amândouă case
//   case 5:
//     alert('Incorect!');
//     break;
//   default:
//     alert('Rezultatul pare ciudat.');
// }


// let arg = prompt("Introduceți numărul?");

// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Unul sau zero' );
//     break;
//   case '2':
//     alert( 'Doi' );
//     break;
//   case 3:
//     alert( 'Nu se va împlini niciodată!' );
//     break;
//   default:
//     alert( 'Valoare necunoscută' );
// }

// homework

let number = +prompt('Vă rugăm să introduceți un număr între 0 și 3', '');
switch (number){
case 0: alert('Ai introdus numărul 0');
brake;
case 1: alert('Ai introdus numărul 1');
brake;
case 2: 
case 3:
// alert('Ai introdus numărul 2, sau poate 3');
alert ('Ai introdus ' +number);
}


