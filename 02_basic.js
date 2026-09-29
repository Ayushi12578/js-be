// let score="33 abhsagts";
// console.log(typeof score);


// // convert the string into number 
// let valuein= Number(score)
// console.log(typeof valuein)
// if convert the string into number then otput will NAN 
// console.log(valuein)


// convert number into boolean
// let logged =1
// console.log(logged)
// console.log(typeof logged)

// let boollogged=Boolean(logged)
// console.log(typeof boollogged)
// console.log(boollogged)


//1 -> true 0-> false
// ""-> false ; "Hello"-> true




// for string 

// let a=3456
// console.log(typeof a)
// let ab= String(a)
// console.log(ab)
// console.log( typeof ab)


//***************************operation***************************/
// console.log("1"+2)
// console.log(1+2)
// console.log("1"+"2")
// console.log(1+2+"3"+3+4)
// console.log(1+"5")


// avoid these type of conversition it will create the confusion
/*console.log(undefined > 41)
console.log(undefined >=41)
console.log(undefined <=41)
console.log(undefined <41)
console.log(undefined == 41)
 

console.log(null >=41)
console.log(null <=41)
console.log(null <41)
console.log(null == 41)
console.log(null > 41)*/

let myfunction= function(){
    console.log("hello")
}
 
myfunction()

/*Har baar Symbol() banane par ek completely unique
 Symbol banta hai, chahe andar ki value same ho.
Symbol(123456)  → 🪪 ID-A
Symbol(123456)  → 🪪 ID-B
Dono ka description same 123456 hai, lekin dono alag unique
 identities hain.*/




const rolid=Symbol("123456")
const anotherid= Symbol(123456)
console.log(rolid==anotherid)


const a = "123456";
const b = "123456";

console.log(a == b);