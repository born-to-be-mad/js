// DESCTRUCTURING ARRAYS ####
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]

var [missing] = [];
console.log(missing);
// undefined


function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth);
// 5

// DESCTRUCTURING OBJECTS ####
const obj = {
  name: "James Bond",
  drink: "Martini&vodka"
};
const {name, drink} = obj;
console.log("Destructured: %s drinks %s", name, drink);

const {name: myName, drink: myDrink} = obj;
console.log(
    "Destructured with new varaiable names: %s likes %s",
    myName,
    myDrink
);

var robotA = { name: "SuperCat" };
var robotB = { name: "SuperDog" };
var { name: nameA } = robotA;
var { name: nameB } = robotB;
console.log(nameA);
// "SuperCat"
console.log(nameB);
// "SuperDog"

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"

var complicatedObj = {
  arrayProp: [
    "James",
    { second: "Bond" }
  ]
};
var { arrayProp: [first, { second }] } = complicatedObj;
console.log(first);
// "James"
console.log(second);
// "Bond"

var { missing } = {};
console.log(missing);
// undefined

// The ABSEBSE of let/const/var causes an error
{ blowUp } = { blowUp: 10 };
// Sysntax error

({ safe } = {});
// No errors


// MORE ####
var {wtf} = NaN;
console.log(wtf);
// undefined

var {blowUp} = null;
// TypeError:  null has no properties

// DESCTRUCTURINg WITH default values ####
var [missing = true] = [];
console.log(missing);
// true

var { message: msg = "Smth went wrong" } = {};
console.log(msg);
// "Smth went wrong"

var { x = 3 } = {};
console.log(x);
// 3


// ### ES6 ####
var map = new Map();
map.set(window, "global object");
map.set(document, "document");

for (var [key, value] of map) {
  console.log(key + " — this " + value);
}

// keys only
for (var [key] of map) {
  // ...
}

// values only
for (var [,value] of map) {
  // ...
}

// ### RETURN several values
function returnMultipleValues() {
  return [1, 2];
}
var [foo, bar] = returnMultipleValues();

function returnMultipleValues() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = returnMultipleValues();

function returnMultipleValues(k) {
  k(1, 2);
}
returnMultipleValues((foo, bar) => ...);
