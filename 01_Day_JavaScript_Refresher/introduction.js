const array1 = ["gg","ss","tt","ee"
];
const array2="123456789"
const splitArray2 = array2.split('');

console.log(array1);
console.log(array1.length);
console.log(splitArray2);
console.log(splitArray2[2]);

const emptyArray = Array(8).fill("gg");
console.log(emptyArray);

console.log(emptyArray.concat(array1));

//tenary
splitArray2.indexOf("banana")!=1 ? console.log("no banana") : console.log("banana available") 

//joining arrays
console.log(array1.join(","));

//slicing
console.log(array1.slice(1,array1.length));

//push and pop
console.log(array1.push('my new item'));
console.log(array1);

console.log(array1.pop());
console.log(array1);

//removing one element from beginning
array1.shift();
console.log(array1);

//adding one element to the beginning of an array
array1.unshift("new ele")
console.log(array1);

//reverse array
array1.reverse();
console.log(array1);

//sort
array1.sort();
console.log(array1);




