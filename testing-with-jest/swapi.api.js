const fetch = require("node-fetch");

const getPeoplePromise = fetch => {
  return fetch("https://swapi.co/api/people")
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getPeopleAsync = async fetch => {
  const apiRequestResults = await fetch("https://swapi.co/api/people");
  const data = await apiRequestResults.json();
  //console.log(data);
  return {
    count: data.count,
    results: data.results
  };
};

module.exports = {
  getPeopleAsync,
  getPeoplePromise
};

//getPeopleAsync(fetch);

//getPeoplePromise(fetch);
