const obj = {
  name: "James Bond",
  drink: "Martini&vodka"
};
const { name, drink } = obj;
console.log("Destructured: %s drinks %s", name, drink);

const { name: myName, drink: myDrink } = obj;
console.log(
  "Destructured with new varaiable names: %s likes %s",
  myName,
  myDrink
);
