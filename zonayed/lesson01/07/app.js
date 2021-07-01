for (let i = 1; i <= 10; i++) {
    console.log(`step ${i} `);
}


var num;

do {
    console.log('Inside the Loop');
    num = prompt('Enter the number: ');
} while (num < 10);

console.log('Outside the Loop');