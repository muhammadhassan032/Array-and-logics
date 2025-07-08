const myUsers = ["Abdullah","Harron","Hassan","Tayyab"];
console.log (myUsers);
// putt add in
myUsers.push("Ali");
console.log(myUsers);
// pop romove in last
myUsers.pop();
myUsers.pop();
console.log(myUsers);
//unshifted add in first
myUsers.unshift("Taha")

console.log(myUsers);
//shift remove first
myUsers.shift();
console.log(myUsers);
/// indexof find array
console.log(myUsers.indexOf("Harron"))
//liceendpeople
const newrray = licesendpeople = ["Harron","Hassan","Abdullah"]
// in which a element hai array ye nhi
console.log (licesendpeople.includs("Harron"));
// reverse the array
const newarray = licesendpeople.reverse();
console.log(licesendpeople.concat(myUsers));
//how to check length of lisence people
console.log (licesendpeople.length);
//array element traversr
for (let i =0; i<= licesendpeople.length - 1; i++){
}
//maping function
console.log("Below in the map");
licesendpeople.map((Abdullah)=>{
console.log(Abdullah);
});
//passed  function callback
let userage = [18, 15, 19, 20];
console.log(userage)
userage.map((age)=>{
 if (age =>18){
console.log ("userage greater then 18");
 }
})

//3D
const matrix3d =  [
[
      [1, 4, 6],
      [2, 4, 5],
],
[
    [7, 8, 9],
    [0, 8, 2],
],
];
console.log(matrix3d[1][1])
console.log(matrix3d[0][0])
// Operators && and operatoer
let age = 34;
let haslicense = true;
if (age >= 18 && haslicense == true) {
    alert("You are eligible");
}
//  || opretors
let isbirthday = false;
let gotgoodgrade = true;
if (isbirthday == false || gotgoodgrade == true ) {
    alert("you can treat for everyone")
}
// not operators



// maping
let array = ["ali","ahmad","rafay"]
console.log(array)
let a = array.map((value, index,array )=>{
    console.log(value, index,array)
}

);