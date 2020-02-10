const fetch = require("node-fetch");

const swapi = require("./swapi.api");

it("calls swapi to get people - via async", () => {
  expect.assertions(1);
  return swapi.getPeopleAsync(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it("calls swapi to get people - via Promise", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
