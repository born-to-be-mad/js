const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);

console.log("Maximum number: %d", max);

function myFunc(...args) {
  console.log(
    "Rest-parameters sample(sum of two numbers): %d",
    args[0] + args[1]
  );
}
myFunc(1, 2, 3, 4);
