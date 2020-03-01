# A Guide to Browser Debugging Console

- `console.log(console);` -to see the console object itself. This command will output the various properties of the console object as the browser knows them. Most of them are functions and will be rather consistent regardless of browser. If there are differences in the properties of the console object from one browser to another, this way you can see the differences.

- `console.clear();` or `clear()` - browsers typically provide a button in DevTools that clears things out and starts with a fresh console. However, the console object itself also provides such a command.
  `clear()` is another version of `console.clear()`, but without the “Console was cleared” message.

* debug(), error(), info(), log(), and warn() - these five commands that at first glance seem to do the exact same thing. And, technically, they do. But browsers provide additional features tied to the five commands to give each their own distinct benefit.

```
console.debug();
console.error();
console.info();
console.log();
console.warn();
```

One interesting thing to add is that we can pass more than one item to the log as parameters and it’ll display them inline.

```
console.log('string', 'string');
console.log(12, 3456);
console.log({object: 'object'}, {object: 'object'});
console.log(['array', 'array'], ['array', 'array']);
```

- String substitution

  ```
  console.log(`This is a string: ${'string'}`);
  console.log(`This is a number: ${42}`);
  console.log(`This is an object: ${{object: 'object'}}`);
  ```

- Styling the output

```
console.log('%cThis is large red text', 'color: red; font-size: 30px;');
console.log('This is %cred text %cand this is %cgreen text.', 'color: red;', '', 'color: green;');
console.log('%cHello from styled text!', `
  background: white;
  border: 3px solid red;
  color: red;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`);
```

- Being assertive: `assert()`.
  Asserting allows for the usage of a boolean condition to determine whether it should output the text to the console.

```
let value = 10;
console.assert(value <= 10, 'The value is greater than 10.');
```

- Keeping count: count() and countReset()

```
console.count();
console.count();
console.countReset();
console.count();

console.count('this is a label');
console.count('this is a label');
console.countReset('this is a label');
console.count('this is a label');
```

- Describe that thing: dir() and dirxml()
  The main idea behind these two commands is to display either properties of a Javascript object with console.dir() or descendant elements of an XML/HTML element with console.dirxml(). It appears Chrome has these implemented as expected, while Firefox just uses both as aliases for console.log().

```
  const count = {
  one: 'one',
  two: 'two',
  three: 'three'
  };
  console.log(count);
  console.dir(count);
  console.dirxml(count);
```

- Let’s get together: group(), groupCollapsed(), and groupEnd()

```
console.group('outer group');
console.log('outer one');
console.log('outer two');
console.group('inner group');
console.log('inner one');
console.log('inner two');
console.log('inner three');
console.groupEnd();
console.log('outer three');
console.groupEnd();
```

- more structured display for tables via `console.table()`

```
let arrayOfArraysWithObject = [
  ['one', 'two', {three: 'three', four: 'four'}],
  ['one', 'two', {three: 'three', four: 'four'}],
  ['one', 'two', {three: 'three', four: 'four'}]
];

console.table(arrayOfArraysWithObject);
```

- `time(), timeLog(), and timeEnd()` to measure how long something takes to complete

```
console.time('this is a timer');
console.timeLog('this is a timer');
console.timeEnd('this is a timer');
```

- Dropping breadcrumbs with: trace()
  Calling `console.trace()` will output a stack trace to the console showing the path through the code to that call. We can even pass it a string as a form of label, but other data types such as arrays or objects can be passed.

* `Debugger` command
  Calling this command will output a stack trace to the console showing the path through the code to that call. We can even pass it a string as a form of label, but other data types such as arrays or objects can be passed.

  ```
  function whatsInHere() {
  debugger;
  // rest of the code
  }
  ```

  - `$0, $1, $2, $3, $4`
    These five commands are extremely handy. `$0` represents the currently selected element in the DOM inspector. This essentially provides a shortcut instead of having to use more traditional DOM methods, such as getElementById or a querySelector. The other commands in this set represent elements that were previously selected. Think of them as a form of selection history. $1 is the previous element, $2 is the previous before that, and so on.

* `$(‘element’), $$(‘elements’)` shortcuts for document.querySelector('element') and document.querySelectorAll('elements')

* `getEventListeners(object)` - this command, when given a DOM element, will report the event listeners registered to that element.
  F.e., using the `$0` example from above we can use `getEventListeners($0)`.
