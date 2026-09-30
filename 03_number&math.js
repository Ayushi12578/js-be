const amount =new Number(500)
console.log(amount)
console.log(amount.toExponential())
console.log(amount.toFixed(3)) 
// +++++++++++++++++++++++++math===================
console.log(Math.abs(-55))// absolute value=> convert - values into positive
console.log(Math.PI)
console.log(Math.sqrt(121))

console.log((Math.random()*2)+5)
const max=15
const min= 5
console.log(Math.floor(Math.random()* (max -min +1))+min)
 


// // --------------------------------date and time---------------------
let mydate =new Date()
console.log(mydate)
console.log(mydate.toDateString())// give only date with year and day
console.log(mydate.toLocaleString())// give date 30/9/2026, 11:38:32 am in numeric form and with time amor pm
console.log(mydate.toJSON())// 2026-09-30T06:10:40.733Z
console.log(typeof mydate)

// declare date  
let my=new Date(1,5,4)
console.log(my.toDateString())

let samaye=Date.now()
console.log(samaye)
console.log(Math.floor(Date.now()/1000))//give the  value in milisec
 
