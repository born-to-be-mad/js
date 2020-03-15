function createGreeter(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
}

const doGreeting = createGreeter("Hello");

doGreeting("Dzmitry");

//### real API sample

function apiConnect(apiKey) {
  function get(route) {
    return fetch(`${route}?key=${apiKey}`);
  }

  function post(route, params) {
    return fetch(route, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    });
  }
  return { get, post };
}

const api = apiConnect("my-secret-key");

// Больше передавать ключ не нужно
api.get("http://www.example.com/get-endpoint");
api.post("http://www.example.com/post-endpoint", { name: "Joe" });
