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