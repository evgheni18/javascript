// function userName() {
//   alert ("Eugen")
//   }
//   userName()

//   let userNme = function() {
//     alert("Eugen");
//     }
//     userNme()


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// function showOk() {
// alert ("thx");
// }
// function showCancel() {
// alert ("please confirm") 
// }
// ask()

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert( "Ești de acord." );
// }

// function showCancel() {
//   alert( "Ați anulat execuția." );
// }

// // utilizare: funcției showOk,showCancel sunt transmise ca argumente pentru ask
// ask("Ești de acord?", showOk, showCancel);

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
"Please", 
function () {alert("thanks"); },
function () {alert("please confirm"); }
);vvvvv
