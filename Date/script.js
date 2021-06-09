// const now = new Date();

// console.log(now);


//With arguments

// const now = new Date("2021-06-09");

// console.log(now);

// const now = new Date(2021, 6, 9);

// console.log(now);



//With Milliseconds

// const now = new Date(-9999999999);

// console.log(now);


//Methods Get

// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset()); // difference between Timezone and UTC
// console.log(now.getTime());


// Method Set

// console.log(now.setHours(18));
// console.log(now);

// console.log(now.setHours(18, 40));
// console.log(now);

// console.log(now.setHours(40));
// console.log(now);


// Parse Method

// const now = new Date('2021-06-09');
// // new Date.parse('2021-06-09'); // the same as  new Date('2021-06-09');
// console.log(now);


//Calculate dates

let start = new Date();

for(let i = 0; i < 100000; i++){
    let same = i ** 3;
}

let end = new Date();
console.log(`Difference between end and start is ${end - start}`);