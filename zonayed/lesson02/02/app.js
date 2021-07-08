var callF = {
    name: 'rifat',
    age: 18,
    address: function () {
        console.log('My Name ' + this.name);
    },
    years: 2004,
}
callF.address.call(callF)
callF.age(2021)

var rahim = {
    name: 'Rahim Abdu',
    dob: 1986
}
rahim.age(2018, 'Hello World!');