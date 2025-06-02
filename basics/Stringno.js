let val=3;
let negval= -val;
console.log(negval);
//  =-3
// let str1= "Muneeb";
// let str2="Khan";
// let str3= str1+str2;
// console.log(str3);
let str1= "Muneeb";
let str2="Khan";
//  (bactect) string interpolation    placeholder banata  ha   jo be variable ha direct inject karsata ha 
console.log(`hello my name is ${str1}  and  my  cast is ${str2}`);


console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.charAt(3));// kis index ma konsa character ha
// The charAt() method is used to get a specific character from a string based on its index
console.log(str1.indexOf('e'));//konsa  character konsi position ma ha
// indexOf() is used to find the position of a specific character or substring inside a string or array
console.log(str1.substring(0 , 4))// start  from 0 and end  in 3
console.log(str1.slice(-4 , 4))
// Your string: "Muneeb"
// Length = 6
// -4 → 6 - 4 = 2


// trim remove starting space and endind space 
const newStringOne = "    Hi/n tesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://muneeb.com/muneeb%20choudhary";
console.log(url.replace("%20","-"));


console.log(url.includes("mammasdhsdjfhdrjhkfsdbb"));
console.log(url.includes("muneeb"));


// The split() method is used to break a string into parts and return those parts in an array

let str = "Muneeb is learning JS";
let result = str.split(" ",2);

console.log(result);
// Output: ["Muneeb", "is", "learning", "JS"]



