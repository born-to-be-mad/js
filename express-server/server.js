const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// existing users
const users = [{ email: "abc@foo.com" }];

// employees data in a database
const employees = [
  { firstName: "Jane", lastName: "Smith", age: 20 },
  //...
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Mary", lastName: "Green", age: 50 }
];

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(bodyParser.raw());

app.get("/hello", (req, res) => res.send("Hello World!"));

app.post("/", (req, res) => {
  console.log("Got body:", req.body);
  //res.sendStatus(200);
  res.json(req.body);
});

app.post("/users", (req, res) => {
  const { email } = req.body;
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ error: "User already exists" });
  }
  res.json(req.body);
});

app.get("/employees", (req, res) => {
  const { firstName, lastName, age } = req.query;
  let results = [...employees];
  if (firstName) {
    results = results.filter(r => r.firstName === firstName);
  }

  if (lastName) {
    results = results.filter(r => r.lastName === lastName);
  }

  if (age) {
    results = results.filter(r => +r.age === +age);
  }
  res.json(results);
});

app.get("/articles", (req, res) => {
  const articles = [1, 2, 3];
  // code to retrieve an article...
  res.json(articles);
});

app.get("/articles/:articleId/comments", (req, res) => {
  const { articleId } = req.params;
  const comments = [];
  // code to get comments by articleId
  res.json(comments);
});

app.post("/articles", (req, res) => {
  // code to add a new article...
  res.json(req.body);
});

app.put("/articles/:id", (req, res) => {
  const { id } = req.params;
  // code to update an article...
  res.json(id);
});

app.delete("/articles/:id", (req, res) => {
  const { id } = req.params;
  // code to delete an article...
  res.json({ deleted: id });
});

app.listen(port, () => console.log(`Server started on port ${port}!`));
