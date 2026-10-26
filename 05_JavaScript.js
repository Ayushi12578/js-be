// concat & push& spread
// spread means broke the glass
// push exsiting array mai add krta hai
// concat means new arrray mai add krta hai

/*add two array using push means
hame new varible create nahi krna padta hai exsiting array mai modification possible hai
*/

let marvel_hero=["IronMan","batman","hellowin"]
let dc_hero=["Spiderman","ehbddc","fhbdejks"]
// marvel_hero.push(dc_hero);
// console.log(marvel_hero)


/* in concat mai need hoti hai new variable create krna padta hai*/

let all_herr=marvel_hero.concat(dc_hero)
// console.log(all_herr)

/*spread */
const all_new=[...marvel_hero,...dc_hero]
// console.log(all_new)


//flat-> it means return new array with all subarray
const a=[12,23,34,[4332,2121,[3212,654,765]]]
const b=a.flat(Infinity);
// console.log(b)


console.log(Array.from("Avni")) 

let score=122;
let score2=4555;
let score3=779;
console.log(Array.of(score,score2,score3))
