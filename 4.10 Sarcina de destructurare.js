// let arr = ["user1", "user2"];
// alert(arr[0]);
// alert(arr[1]);


// let [firstName, lastName] = arr
// alert(firstName);
// alert(lastName);

// let [fn, ln] = "user1 user2".split(" ")
// alert(fn);
// alert(ln);
// arr.push("user3")

// let [, , u3] =arr
// alert(u3);

// let [a, b, c ] = "sun";
// alert(a);
// alert(b);
// alert(c);

// let [one, two, three ] = new Set([1, 2, 3])
// alert(one);
// alert(two);
// alert(three);

// let user = {};
// [user.name, user.lastName] = "user user1". split(" ");
// alert(user.name);
// alert(user.lastName);
// for(let[key, value] of Object.entries(user)){
    // alert(`${key} : ${value}`);
// }

// let user1 = new Map();
// user1.set("name", "John");
// user1.set("age", "30");
// for(let[key, value]of user1){
    // alert(`${key} : ${value}`);
// }


// let  [name1, name2, ...rest] = ["user1", "user2", "user3", "user4"];
// alert(name1);
// alert(name2);
// alert(rest);

// let [firstName = "user1", lastName = prompt("name")] = [1]
// alert(firstName);
// alert(lastName);
// let width = 300;
// let options = {
//    size:{
//     width: 200,
//     height: 100,
//    },
//    items:["cake", "donuts"],
//    extra:true,
// }
// let {title, ...rest} = options;
// alert(title);
// alert(rest.width);
// alert(rest.height);
// let title ="john"

// let width, height;
// ({title, width, height} = options);
// alert(title);
// alert(width);
// alert(height);
// let{size: {width, height}, items:[item1, item2], ...rest} = options;

// alert(width);
// alert(height);
// alert(item1);
// alert(item2);
// alert(rest.extra);

// recap

// let [userName, , title, ... rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert( title ); // Consul
// alert(rest [0]);

// let options = {
//     title: "menu",
//     width: 100,
//     height: 50
// };
// let {width: z, title: d, height} = options;
// alert(z);
// alert(d);
// alert(height)

// let options = {
//     title: "Menu"
// };
// let {width = prompt("width?"), title = prompt("title?")} = options;
// alert(title);
// alert(width);

// let options = {
//     size: {
//         width: 100,
//         height: 50
//     },
//     items: ["cake", "Kola"],
//     extra: true
// };
// let {
//     size:{
//         width,
//         height
//     },
//     items: [item1, item2],
//     title = "Menu",
// } = options;
// alert(title);

// homework 

let user = {
    names : "John",
    year: 30
};

let {names, year, isAdmin = false} = user;

alert( names ); // John
alert( year ); // 30
alert( isAdmin ); // false

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//    };
// function topSalary(salaries) {
//     return Object.keys(salaries).reduce((max, s) => salaries[max] > salaries[s] ? max : s)
//     }
//     alert(salaries);
//     alert(topSalary);
       

