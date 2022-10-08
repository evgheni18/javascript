// let user = null;
// alert(user && user.address && user.address.street)
// alert(user?.address?.street);
// let x = 0;
// user?.sayHi(x++);
// alert(x);

let user1 = {
    admin() {
alert("admin")
    },
firstName: "Ion",
}

let user2 = {};
let key = "firstName";
alert(user1?.[key]);
alert(user2?.[key]);
delete user1.address.street;
// user1.admin?.();
// user2.admin?.();