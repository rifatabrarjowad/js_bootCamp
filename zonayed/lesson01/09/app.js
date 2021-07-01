var rifat = {
    full_name: "Rifat Abrar Jowad",
    age: 18,
    class: 10,

}
console.log(rifat);
console.log(rifat.full_name);
console.log(rifat.age);
console.log(rifat.class);


for (item in rifat) {
    console.log(item);
}

var arrObj = ['Zonayed', { name: 'Rafiq', age: 21, job: 'Student' }, 'Bangladesh']

console.log(arrObj[1]);