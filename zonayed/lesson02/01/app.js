console.log(this);

if (this === window) {
    console.log("true");
}


var a = {
    name: "Rifat Abrar Jowad",
    job: "os development",
    place: {
        thana: 'lalpur',
        gram: 'nobinogor',
        name: 'rifat',
        address: function () {
            console.log("My name is " + this.name);

        }

    }
}

a.place.address()