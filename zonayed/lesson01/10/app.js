function nope(na, ha) {
    var sum = na + ha;
    return sum

}
console.log(nope(2, 3));


function MyName(name, age) {
    console.log(`My name is ${name} . I am ${age} years old`);

}
console.log(MyName('Rifat', 17))

function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Rifat Abrar Jowad')('Coffee');