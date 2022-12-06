// const radius = [3,1,2,4];

/*
----------------normal funtion------------------
const calculateArea = function (radius) {
    const area = [];
    for(let i=0; i<radius.length; i++) {
        area.push(Math.PI * radius[i] *radius[i]);
    }
    return area;
};

const calculateCircumf = function(radius) {
    const circum = [];
    for(let i = 0; i<radius.length; i++) {
        circum.push(2*Math.PI*radius[i]);
    }
    return circum;
}

const calculateDiameter = function(radius) {
    const dia = [];
    for(let i = 0; i<radius.length; i++) {
        dia.push(2*radius[i]);
    }
    return dia;
}

console.log(calculateDiameter(radius));
console.log(calculateCircumf(radius));
console.log(calculateArea(radius));

*/



/*----------highOrder-Function--------------*/
// const calculate = function(logic,radius) {
//     const ans = [];
//     for(let i = 0; i<radius.length; i++) {
//         ans.push(logic(radius[i]));
//     }
//     return ans;
// }

// const area = function(num){
//     return Math.PI * num*num;
// }


// console.log(radius)

// console.log(calculate((num)=>{
// return 2*num;
// },radius));


// console.log(calculate(area,radius));






// const arr = [1,2,30,4,5];
// const ans = function(arr){ 
//     let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//       sum+=arr[i];
// }
// return sum;
// }
// console.log(ans(arr));


// const output = arr.reduce((acc,cur) =>{
//     acc = cur>acc? cur:acc;
//     return acc;
// },0);
// console.log(output);




/*****filter assigment **********/

// const Names = ["hi","I","am","Ashwin","from","India","abccba","ok"];

// const condition1 = function(names){
//     if (names.length < 3) {
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// const condition2 = function(names){
//     if(names.includes("hi")){
//         return true;
//     }
//     else{
//         return false;
//     }
// };

// const condition3 = function(names) {
//     if(palindrome(names)){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const palindrome = function(string){
// let l = string.length;
// for(let i = 0; i < l/2; i++){
//     if(string[i] != string[l-i-1]){
//           return false;
//     }
// }
// return true;
// }

// const filter = function(condition,Names){

//     const a = [];
//     let j = 0;
//     for(let i = 0; i < Names.length; i++) {
//         if( condition(Names[i])){
//         a[j] = Names[i];
//         j++;
//         }
//     }

// return a;
// }

// console.log(filter(condition1,Names));
// console.log(filter(condition2,Names));
// console.log(filter(condition3,Names));


/***************Assigment 2 *************/

// const Number = [1,2,3,4,5];

// const squareRoot =  function(num){
//     return Math.sqrt(num);
// }

// const Tostring = function(num){
//     return num.toString();
// }

// console.log(Number.map(squareRoot));
// console.log(Number.map(Tostring));


/*****************Assigment 3  ******************/

const users = [
    { firstName: "akshay", lastName: "saini", age: 26},
    { firstName: "aman", lastName: "singh", age: 30},
    { firstName: "ashwin", lastName: "patel", age: 16},
    { firstName: "misra", lastName: "avi", age: 36},
];

const output = users.reduce((acc,cur)=>{
    if(cur.age < 30) {
        acc.push(cur.firstName);
    }
    return acc;
},[]);

console.log(output);