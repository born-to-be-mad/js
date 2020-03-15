let arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(el => el + 20);
console.log(".map in action:%s", mapped);

arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter(el => el === 2 || el === 4);
console.log(".filter in action:%s", filtered);

arr = [1, 2, 3, 4, 5, 6];
const reduced = arr.reduce((total, current) => total + current);
console.log(".reduce in action(total sum):%s", reduced);

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5);
console.log(".find in action: %s", found);

arr = ["Nick", "Frank", "Joe", "Frank"];
let foundIndex = arr.findIndex(el => el === "Frank");
console.log(foundIndex);

arr = ["Nick", "Frank", "Joe", "Frank"];
foundIndex = arr.indexOf("Frank");
console.log(foundIndex);

const pushed = arr.push(5);
console.log(arr);
console.log(pushed);

arr = [1, 7, 3, -1, 5, 7, 2];
const sorter = (firstEl, secondEl) => firstEl - secondEl;
arr.sort(sorter);
console.log(arr);
