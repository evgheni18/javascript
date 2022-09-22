function hello (name) {
    var userName = 'John';
    var phrase = `hello ${name}`
    debugger
    say (phrase);
}
function say(phrase){
    alert (`**${phrase}**`+userName);
    
}
// hello ('hello');
for (let i = 0; i<10; i++){
    console.table([['name', i]]);
    console.count();
    console.countReset();
}