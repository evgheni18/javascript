// alert(true || true);

// let hour = 9;
// if (hour < 10 || hour > 18){
//     alert ('go to work ')
// }

// alert (1 || 0); // 1 
// alert(true || 'hello') // true 
// alert (null || 1); //1
// alert (null || 0 || 1); //1
// alert (null || null || 0); // 0  este ultimul 


// let currentUser = null;
// let defaultUser = 'John';
// let name = currentUser || defaultUser || unnamed;
// alert (name);

// let x;
// true || (x = 1);
// alert(x);


// let hour = 12; 
// let minute = 30;
// if (hour == 12 && minute == 30){
//     alert ("time is true ")
// }

// alert(1 && 0);// 0
// alert (1 && 5);//5
// alert (null && 5);// null
// alert (0 && 'hello');


// alert (1 && 2 && null && 3);

// let x = 1;
// (x > 0) && alert('greater then 0');

// alert ( !true);
// alert ( !0);

// alert (!! ''); //false 
// alert (!!'hello');// true
// alert (!! null); //false
// alert (!! undefined);// false
// alert (!!0);// false 
// alert (!!'0');// false
// alert (!! NaN);// true
// alert (!! Number);//false 

// let result = NaN && (0 || !true) || 'hello';
// alert (result); 

// recap

// let Number = Number
// if (1 || 0) { // funcționează ca dacă (adevărat || false)
//   alert( "truthy!" );
// }
// let hour = 11;

// if (hour < 10 || hour > 18) {
//   alert( "Go to work" );
// }


// let hour = 12;
// let minute = 30;

// if (hour == 11 && minute == 30) {
//   alert( "The time is 12:30" );
// }

// let x = 0;
// (x > 1) || alert( "Greater than zero!" );

// let value = 5
// result = value;
// alert(value)


// home work
// alert(null || 2 || undefined); //2
// alert(alert(1)|| 2 || alert(3)); //1 si 2 (de ce returneaza si 2?)
// alert(1 && null && 2); //null
// alert(null || 2 && 3 || 4); // null 3
// alert(confirm() || 2); // confirm true (de ce returneaza true?)
