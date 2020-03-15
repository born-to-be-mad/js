// Асинхронный код; 'done' журналирован после данных о положении, несмотря на то что 'done' предполагается
// исполнить в коде позже
navigator.geolocation.getCurrentPosition(
  position => {
    console.log(position);
  },
  error => {
    console.error(error);
  }
);
console.log("done");

// Асинхронный код обработан после промиса; мы получаем желаемый результат — данные о положении
// журналированы, затем журналировано 'done'
const promise = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject);
});

promise
  .then(position => console.log(position))
  .catch(error => console.error(error))
  .finally(() => console.log("done"));

// Асинхронный код с async/await выглядит как синхронный, наиболее удобочитаемый способ
// работы с промисами
async function getPosition() {
  // async/await работает только в функциях (пока)
  const result = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const position = await result;
  console.log(position);
  console.log("done");
}

getPosition();
