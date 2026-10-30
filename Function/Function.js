//Function is like a package or buundle of code 
function sum(number1,number2){
    
   let total=number1+number2
   return total
   //after retun koi vhii chezz kam nahi karte hai


}
const a=sum(5,4) //const total if you take different value then it is not given the output 
console.log("Result :",a)

//String interpulation --> values ko directly insert karna.

function Loginuser(username){
   return `${username} JUST LOGIN`
}
let NAME=Loginuser("AYUSHI GUPTA")
console.log(NAME)
