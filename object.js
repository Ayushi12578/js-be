//singleton->
// Singleton mein hum aisa setup karte hain ki class ka object sirf ek baar create ho aur sabko wahi object mile.

//object literals


//Object.create  //create object through  constructor method
//object literals these are
let mysym=Symbol("key2")
const jsuser ={
    [mysym]:"#@#$%^",
    name: "Ayushi",
    age:22,
    addess:"jalaun",
    email:"ayushi@123gamil.com",
    
    // "name":"avni"  this is not display by .output
}
console.log(jsuser.email)
console.log( typeof jsuser.mysym)
console.log(jsuser["email"])//multipe output is not display at one time
/**/ 
//symbol

//if we are using need to define the varible under the[]brackte

jsuser.email="ayushi@gmail.com"
// Object.freeze(jsuser)
// freeze --> means if using this keyword value is not change 
jsuser.email="vgbhnjmk@gmail.com"

console.log(jsuser)

//object function

jsuser.wish = function(){
    console.log("Hello js");
};
jsuser.morningwish=function(){
    // console.log(`hello js users,${this.name}`);
};

jsuser.wish();
jsuser.morningwish();

//  singleton object
//=================singleton================================->
const single=new Object() 
// const sing={} nonsingleton object 

console.log(single)



// ===============destuctue=======================
 
const product={
    productname:"bangle",
    productprice:455,
    productsize:2.4,
    productbrand:"tanishks"

}
const{productprice:price}=product
console.log(price)


// =============API=====================

