console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 < 15);

// && - Will return first falsy value or the last value

let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 0 && 30;

console.log(a);
const post = ["Post one", "Post Two"];
post.length > 0 && console.log(post[0]);

// || - Will return first truthy value or the last value

let b;
// b = 10 || 20;
b = 10 || 20 || 30;
b = 0 || null || 30;
// b = 10 || "" || 0 || 30;
console.log(b);

// ??- Returns the right side operand when the left is null or undefined

let c;
c = 10 ?? 20;
c = 10 ?? 20 ?? 30;
c = null ?? "1" ?? 30;
// c = 10 ?? "" ?? 0 ?? 30;
console.log(c);
