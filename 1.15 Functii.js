// let userName = 'John'
// function sum(a,b){
//     if (typeof(a) !='number' || typeof(b) != 'number'){
//         return ('parametri trebuie sa fie de tip NUMBER')
        
//     }
//     return a + b;
// }
// function showMessage (from, text ){
// let userName = 'Jessy'
// let message = 'Hello World' + userName;
// if (text === 'nu a fost gasit text');
// text = text === undefined ? 'nu a fost gasit textul!' : text;
//     alert(from + ':'+ text);
// }
// let result = sum(1,'2');
// alert (result)
// showMessage('John ','Hello');
// showMessage('Jessy ','Hello');
// showMessage('Ion ','Hello');
// showMessage(userName,undefined);

// function checkAge (age){
//     if  (age > 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// alert (checkAge(1n));

// function showMovie(age){
//     if (!checkAge(age)){
//         return;
//     }
//     return true;
// }
// function doNoting(){
//     return(
//         1+1
//         );
// }
// let age = 10;
// function getAge(){
//     return age;
// }
// alert (getAge());
// alert (showMovie(18));



// function showMessage() {
//     alert( 'Salut!' );
//   }
//   showMessage();  
//   showMessage();

// let userName = 'Ion';
// function showMessage() {
//     let message = "Salut,JavaScript!" + userName; // variabilă locală
//     alert(message);
//   }
//   showMessage(); // Salut,JavaScript!
//   alert(message); // va fi o eroare, pentru că variabila este vizibilă numai în interiorul funcției

// function showMessage(from, text ) {
//     if (text === undefined) {
//       text = 'nu a fost adăugat niciun text';
//     }
  
//     alert( from + ": " + text );
//   }
//   showMessage();

// function checkAge(age) {
//     if (age > 18)  {
//       return false;
//     }
//   }
// alert (checkAge(4));  

// function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
//   return true;
//     alert( "Show movie" ); // (*)
//     // ...
//   }
// alert (showMovie());  

// function doNothing() { /* gl */ }
// alert( doNothing() === undefined );

// function doNothing() {
//     return ;
//   }
  
//   alert( doNothing() === undefined );

// homework

// function confirm

// function min(a, b) {
//     if (a < b) {
//       return a;
//     } else {
//       return b;
//     }
//   }
//   alert (min(2,5));
  
//   function min(a, b) {
//     return a < b ? a : b;
//   }
  

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }
 

//   function checkAge(age) {
//     return (age > 18 || false);
//   }
//   alert (checkAge(18));

//   function checkAge(age) {
//     return (age > 18 ? true : false);
//   }
//   alert (checkAge(18));

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   alert (checkAge());//da

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
    
//   }
// alert (checkAge(1)); // da va afisa undefined

// function pow(x, n) {
//     let result = x;
  
    // for (let i = n; i > 0; i--) 
//     while(n)
//     {
//       result *= x;
//       n--
//     }
  
//     return result;
//   }
//   alert(pow(3,3));

function pow(x, n)
return = (x**n);

alert (pow(2, 3));