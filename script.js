const student = "Haritha ";
const a =student || "ilngasinghe";
console.log(a);


// when it is undefined
const b = undefined;
const c = b || "hello";
console.log(c);


// when it is null
const d = null;
const e = d || "world";
console.log(e);

//when it is " "
const f = "";
const g = f || "Earth";
console.log(g);

//when it is 0
const h = 0;
const i = h || "Mars";
console.log(i);  

//when Nullish Coalescing operator
const j = 0;
const k = j ?? "Jupiter";
console.log(k);


const l = null;
const m = l ?? "Saturn";
console.log(m);

const n = undefined;
const p = n ?? "Uranus";
console.log(p);


//do not show the value of the variable
const q = "";
const r = q ?? "Neptune";
console.log(q);

//nullish coalescing mean if the value is null or undefined then it will show the value of the variable