// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);
//   function toggleModal() {
//     refs.modal.classList.toggle("is-open");
//   }
// })();

// function calcBMI(weight, height) {
//   weight = Number(weight.replace(",", "."));
//   height = Number(height.replace(",", "."));
//   const result = weight / height ** 2;
//   return Number(result.toFixed(1));
// }

// const bmi = calcBMI("88,3", "1.75");
// console.log(bmi);

// const option = 4000;
// let message = "";
// switch (option) {
//   case 1:
//     message = "Ви можете забрати товар завтра з 12:00 у нашому офісі";
//     break;

//   case 2:
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;

//   case 3:
//     message = "Відправка буде здійснена сьогодні";
//     break;

//   default:
//     message = "Вам зателефонує менеджер";
//     break;
// }

// console.log(message);

// const sub = "pro";
// let message = "";
// if (sub === "free") {
//   message = false;
// } else if (sub === "vip") {
//   message = true;
// } else if (sub === "pro") {
//   message = true;
// }

// console.log(message);

// const sub = "vip";

// const can = sub === "pro" || sub === "vip";

// console.log(can);

// const str = "hello world";

// let counter = 0;
// for (let i = 0; i < str.length; i += 1) {
//   if (str[i] === "") {
//     counter += 1;
//   }
// }
// console.log(counter);

// for (let i = 0; i <= 20; i += 1) {
//   if (i % 2 === 0) {
//     console.log("Парне", i);
//     // continue;
//   }
//   console.log("Не парне", i);
// }

// const total = 450;

// const hour = Math.floor(total / 60);
// const min = total % 60;
// console.log(hour);
// console.log(min);
// console.log(
//   `${hour.toString().padStart(2, "0")} : ${min.toString().padStart(2, "0")}`
// );

// function getDays(deps) {
//   const dayspeed = 7;
//   const nightspeed = 2;
//   let days = 0;
//   let total = 0;
//   while (total < deps) {
//     total += dayspeed;
//     days += 1;
//     if (total < deps) {
//       total -= nightspeed;
//     }
//   }
//   console.log(days);
// }
// getDays(42);

// const values = "8 11";

// const arr = values.split(" ");
// console.log(arr[0] * arr[1]);

// const fruits = ["😉", "🍉", "🍑", "🍇", "🍅"];
// let msg = "";
// for (let i = 0; i < fruits.length; i += 1) {
//   msg += `${i + 1}:${fruits[i]} `;
// }
// console.log(msg);
// for (const fruit of fruits) {
//   fruit += -
//   console.log(fruit);
// }

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 === 0) {
//     total += numbers[i];
//   }
// }
// console.log(total);

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "123,456,789,321";

// const namesArr = names.split(",");
// const phonesArr = phones.split(",");

// let result = "";

// for (const i in namesArr) {
//   result += `${namesArr[i]} - ${phonesArr[i]}\n`;
// }

// console.log(result);

// const string = "Welcome to the fututre";

// const stringsArr = string.split(" ");
// const result = stringsArr.slice(1, -1);
// console.log(result);

// for (let i = 1; i < stringsArr.length - 1; i += 1) {
//   console.log(`${stringsArr[i]}`);
// }

// const values = [2, 17, 94, 1, 23, 37, -1];
// let min = values[0];
// for (let i = 0; i < values.length; i += 1) {
//   if (values[i] < min) {
//     min = values[i];
//   }
// }
// console.log(min);

// function logItems() {
//   let result = "";
//   for (const i in arguments) {
//     result += `${Number(i) + 1} - ${arguments[i]}\n`;
//   }
//   console.log(result);
// }

// logItems("Mango", "Poly", "Ajax");

// function printInfo(names, phones) {
//   let result = "";
//   for (const name in names) {
//     result += `${name} - ${phones}\n`;
//   }
//   console.log(result);
// }

// printInfo("Jacob,William,Solomon,Artemis", "123,456,789,321");

// function printInfo() {
//   const names = arguments[0].split(",");
//   const tel = arguments[1].split(",");
//   let result = "";
//   for (const i in names) {
//     result += `${names[i]} - ${tel[i]}\n`;
//   }
//   console.log(result);
// }

// printInfo("Jacob,William,Solomon,Artemis", "123,456,789,321");

// function formatTime(minutes) {
//   const hour = Math.floor(minutes / 60);
//   const min = minutes % 60;
//   const reshour = String(hour).padStart(2, 0);
//   const resmin = String(min).padStart(2, 0);
//   return `${reshour} : ${resmin}`;
// }

// console.log(formatTime(70));
// console.log(formatTime(450));
// console.log(formatTime(1441));

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// const arr1 = [1, 3, 5];
// const arr2 = [0, 8, 5, 3];
// let total = [];
// for (let i = 0; i < arr2.length; i += 1) {
//   console.log(arr1[i]);
//   if (arr2[i] === arr1[i]) {
//     total += arr1[i];
//   }
// }
// console.log(total);

// function getCommonElements(array1, array2) {
//   let total = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array1[i] === array2.includes([i])) {
//       total += array1[i]
//     }
//   }
//   console.log(total)
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19])

//

// function slugify(title) {
//   return title.toLowerCase().replaceAll(" ", "-");
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxLength) {
//   const arrAll = firstArray.concat(secondArray);
//   // console.log(arrAll);
//   if (arrAll.length > maxLength) {
//     return arrAll.slice(0, maxLength);
//   } else {
//     return arrAll;
//   }
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   let total = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       total.push(numbers[i]);
//     }
//   }
//   return total;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// function getCommonElements(array1, array2) {
//   let total = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       total.push(array1[i]);
//     }
//   }
//   return total;
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.log(user);

// const keys = Object.keys(user);
// const values = Object.values(user);
// let result = "";
// for (const i in keys) {
//   result += `${keys[i]} - ${values[i]}\n`;
// }

// console.log(result);

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// const values = Object.values(salaries);
// for (const value of values) {
//   sum += value;
// }
// console.log(sum);

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return `${stoneName} : ${stone.price * stone.quantity}`;
//     }
//   }
//   return 0;
// }

// console.log(calcTotalPrice(stones, "Щебінь"));

// const playlist = {
//   name: "My amazing",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   getTrackCount() {
//     console.log(this.tracks);
//     console.log(this);
//   },
// };
// const playlist1 = {
//   name: "My amazingffffffffffffff",
//   rating: 50,
//   tracks: ["track-10", "track-20", "track-30"],
//   getTrackCount() {
//     console.log(this.tracks);
//     console.log(this);
//   },
// };
// console.log(playlist.getTrackCount());

// function isEnoughCapacity(products, containerSize) {
//   const productsValues = Object.values(products);
//   let total = 0;
//   for (const productsValue of productsValues) total += productsValue;
//   {
//     if (total <= containerSize) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(isEnoughCapacity({ apples: 4, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function calcAverageCalories(days) {
//   let total = 0;
//   for (const day of days) {
//     let calweek = day.calories / days.length;
//     total += calweek;
//   }
//   return total;
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(newTime) {
//     this.playTime += newTime;
//   },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// const TRANSACTIONS = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,
//   transactions: [],
//   getBalance() {
//     return this.balance;
//   },
//   createTransactions(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length + 1,
//     };
//   },
//   deposit(amount) {
//     if (typeof amount === "number" && amount > 0) {
//       const transaction = this.createTransactions(amount, TRANSACTIONS.DEPOSIT);
//       this.transactions.push(transaction);
//       this.balance += amount;
//     } else {
//       console.error("Не валідні дані");
//     }
//   },
//   withdraw(amount) {
//     if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
//       const transaction = this.createTransactions(
//         amount,
//         TRANSACTIONS.WITHDRAW
//       );
//       this.transactions.push(transaction);
//       this.balance -= amount;
//     } else {
//       console.error("Не валідні дані");
//     }
//   },
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }
//     return null;
//   },
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };
// // console.log(account.getBalance());
// account.deposit(10);
// account.deposit(1000);
// account.deposit(5000);
// account.withdraw(5000);
// account.withdraw(100);
// account.deposit(800);
// // console.log(account.getTransactionDetails(5));
// console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
// console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
// console.log(account);

// const allCars = [
//   { make: "Toyota", price: 20000 },
//   { make: "Ford", price: 10000 },
// ];

// const makeDiscount = (cars, discount) => {
//   // return cars.map((car) => ({
//   //   ...car,
//   //   price: car.price - car.price * discount,
//   // }));
//   const newArr = [];
//   for (const car of cars) {
//     newArr.push({ ...car, price: car.price - car.price * discount });
//   }
//   return newArr;
// };

// console.log(makeDiscount(allCars, 0.4));
// console.table(makeDiscount(allCars, 0.5));

// console.log(allCars);

// const allPlayers = [
//   { name: "Toyota", time: 200, price: 20000 },
//   { name: "Ford", time: 130, price: 20000 },
// ];

// const playerUpdate = "Ford";

// const total = allPlayers.map((allPlayer) => {
//   if (allPlayer.name === playerUpdate) {
//     return { ...allPlayer, time: allPlayer.time + 100 };
//   }
//   return allPlayer;
// });

// console.table(total);

// const newArr = [];
// for (const allPlayer of allPlayers)
//   if (allPlayer.name === playerUpdate) {
//     return newArr.push({ ...allPlayer });
//   }
// console.log(newArr);

// const players = [
//   { id: "toyota", price: 20000, time: 130 },
//   { id: "ford", price: 10000, time: 1 },
// ];

// const makeCars = (cars, discount) => {
//   return cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));
// };

// console.log(makeCars(players, 0.2));
// console.table(makeCars(players, 0.4));

// const players = [
//   { id: "toyota", price: 20000, time: 130 },
//   { id: "ford", price: 10000, time: 1 },
// ];
// console.table(players);

// const playersId = "ford";

// const updateTime = players.map((player) => {
//   if (player.id === playersId) {
//     return { ...player, time: player.time + 100 };
//   }
//   return player;
// });

// console.log(updateTime);

// const players = [
//   { id: "toyota", price: 20000, time: 130, onsale: true, type: "sedan" },
//   { id: "ford", price: 10000, time: 1, onsale: false, type: "suv" },
//   { id: "ford", price: 10000, time: 1, onsale: false, type: "sedan" },
// ];

// const getCarBytype = (cars, type) => {
//   return cars.find((car) => car.type === type);
// };

// console.table(getCarBytype(players, "sedan"));
// console.table(getCarBytype(players, "suv"));

// const getCarById = (cars, id) => {
//   return cars.find((car) => car.id === type);
// };

// console.table(getCarById(players, "toyota"));
// console.table(getCarById(players, "ford"));

// const getCar = (cars, type) => {
//   return cars.filter((car) => car.type === type);
// };

// console.table(getCar(players, "suv"));
// console.table(getCar(players, "sedan"));
// const getOnsale = (cars) => {
//   return cars.filter((car) => car.onsale);
// };

// console.table(getOnsale(players));

// const filterBy = (cars, threshold) => {
//   console.log(cars);
//   return cars.filter((car) => car.price <= threshold);
// };

// console.table(filterBy(players, 10000));
// console.table(filterBy(players, 50000));

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSallary = Object.values(salary).reduce((sum, num) => sum + num, 0);
// console.log(totalSallary);

// const players = [
//   { id: "toyota", price: 20000, time: 130, onsale: true, type: "sedan" },
//   { id: "ford", price: 10000, time: 1, onsale: false, type: "suv" },
//   { id: "ford", price: 10000, time: 1, onsale: false, type: "sedan" },
// ];

// const totalTime = players.reduce((total, player) => total + player.time, 0);
// console.log(totalTime);

// const players = [
//   { id: "toyota", price: 20000, time: 130, onsale: true, type: "sedan" },
//   { id: "ford", price: 10000, time: 1, onsale: false, type: "suv" },
//   { id: "ford", price: 10000, time: 10, onsale: false, type: "sedan" },
// ];

// const totalTime = players.toSorted((currEl, nextEl) =>
//   currEl.id[0].localCompare(nextEl.id[0])
// );
// console.log(totalTime);

// const totalTime1 = players.toSorted(
//   (currEl, nextEl) => nextEl.time - currEl.time
// );
// console.log(totalTime1);
// const totalTime = players.toSorted(
//   (currEl, nextEl) => currEl.time - nextEl.time
// );
// console.log(totalTime);

// const totalTime1 = players.toSorted(
//   (currEl, nextEl) => nextEl.time - currEl.time
// );
// console.log(totalTime1);

// const players = [
//   { id: "toyota", price: 20000, time: 130, onsale: true, type: "sedan" },
//   { id: "ford", price: 10000, time: 1, onsale: false, type: "suv" },
//   { id: "ford", price: 10000, time: 10, onsale: false, type: "sedan" },
// ];

// const totalTime = players.toSorted((currEl, nextEl) =>
//   nextEl.id[0].localeCompare(currEl.id[0])
// );
// console.table(totalTime);

// const numbers = [1, 5, 2, 4, 3];

// const num1 = numbers.filter((num) => num > 2);
// console.log(num1);

// const num2 = num1.map((num) => num * 3);
// console.log(num2);

// const num3 = num2.toSorted((currEl, nextEl) => currEl - nextEl);
// console.log(num3);

// const num4 = numbers
//   .filter((num) => num > 2)
//   .map((num) => num * 3)
//   .toSorted((currEl, nextEl) => currEl - nextEl);
// console.log(num4);

// const allCars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const getModel = (cars) => {
//   return cars.filter((car) => car.onSale === true).map((mod) => mod.model);
// };

// console.table(getModel(allCars));

// const getSorted = (cars) => {
//   return cars
//     .filter((car) => car.onSale === true)
//     .toSorted((a, b) => a.price - b.price);
// };

// console.table(getSorted(allCars));

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// function getUsersWithFriend(users, friendName) {
//   let user = [];
//   return users.filter((user) => user.friends.includes(friendName));
// }

// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );

// function sortByDescendingFriendCount(users) {
//   return users.toSorted(
//     (currEl, nextEl) => nextEl.friends.length - currEl.friends.length
//   );
// }

// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// function getTotalBalanceByGender(users, gender) {
//   return users
//     .filter((user) => user.gender === gender)
//     .reduce((sum, num) => sum + num.balance, 0);
// }

// function foo() {
//   console.log("foo----------", this);
// }

// foo();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("sss", this);
//   },
// };

// user.showTag();

// function showTag() {
//   console.log("sss", this);
//   console.log("aaa", this.tag);
// }

// showTag();

// const mango = {
//   tag: "Mango",
// };

// mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

// function showTag() {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// }

// showTag();

// const mango = {
//   tag: "Mango",
// };

// mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

// const poly = {
//   tag: "Poly",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// poly.showTag();

// const outerShowTag = poly.showTag; // я зберігаю у константу outerShowTag посилання на метод showTag, але я не викликаю цей метод, відповідно, не дивлячись на те що зліва стоїть обʼєкт(poly.) this не буде розраховано, тому що фукнція не викликалась див п.4

// outerShowTag();

// const jacob = {
//   tag: "Jacob",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// // invokeAction - функція вищого порядку
// function invokeAction(action) {
//   console.log(action);
//   action(); // викликаємо колбек фукнцію showTag без контексту, тому що він втратився під час передачі цієї фукнції як колбеку, відповідно this = undefined
// }

// invokeAction(jacob.showTag);

// function foo() {
//   console.log("foo -> this", this);
// }

// foo(); // this = undefined див п.2

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotal(stoneName) {
//     const currStone = this.stones.find((stone) => stone.name === stoneName);
//     return currStone.price * currStone.quantity;
//   },
// };

// console.log(chopShop.calcTotal("Emerald"));

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("showThis -> this", this);
// };

// // showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// // func.call(newThis, ...args);
// // func.apply(newThis, [...args])
// // showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };
// const hat = {
//   color: "black",
// };

// const hat1 = {
//   color: "silver",
// };

// const sweater = {
//   color: "green",
// };

// const changeHatColor = changeColor.bind(hat1);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat1);

// changeSweaterColor("red");
// console.log(sweater);

// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis(); // this = book

// const outerShowThis = book.showThis;
// outerShowThis(); // this = undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // this = undefined

// class User {
//   static userCounter = 0;
//   static incrementUser() {
//     this.userCounter += 1;
//     console.log(`aaa: ${this.userCounter}`);
//   }
//   #password;
//   constructor(firstName, secondName, birthDate, password) {
//     console.log("Увага");
//     User.incrementUser();
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.birthDate = birthDate;
//     this.#password = password;
//   }
//   getName() {
//     return `${this.firstName} ${this.secondName}`;
//   }
//   getAge() {
//     return new Date().getFullYear() - this.birthDate;
//   }
//   #checkPassword() {
//     const userPass = prompt("Enter a password");
//     return userPass === this.#password;
//   }
//   get password() {
//     if (this.#checkPassword) {
//       return this.#password;
//     } else {
//       return undefined;
//     }
//   }
//   set password(newPass) {
//     if (this.#checkPassword()) {
//       this.#password = newPass;
//     } else {
//       alert("incorect data");
//     }
//   }
// }

// class Student extends User {
//   constructor(firstName, secondName, birthDate, password, points) {
//     super(firstName, secondName, birthDate, password);
//     this.points = points;
//   }
// }

// const student = new Student("Oleg", "Davidson", 1987, "qwerty", 87);
// console.log(student);
// user.password = "1111";
// console.log(user);
// console.log(user.password);
// console.log(user.getName());
// console.log(user.getAge());
// console.dir(User);
// const user1 = new User("Olegdddd", "Davidson", 1990);

// console.log(user1);

// const User = {
//   constructor(firstName, secondName, birthDate) {
//     this.firstName = firstName;
//     this.secondName = secondName;
//     this.birthDate = birthDate;
//   },
//   getName() {
//     return `${this.firstName} ${this.secondName}`;
//   },
// };
// class Blogger {
//   constructor({ name, age, numbersOfPoints, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numbersOfPoints = numbersOfPoints;
//     this.topics = topics;
//   }
//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numbersOfPoints} points`;
//   }
//   updatePostCount(value) {
//     this.numbersOfPoints += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@.ukr.net",
//   age: 24,
//   numbersOfPoints: 20,
//   topics: ["tech", "cooking"],
// });
// console.log(mango);
// console.log(mango.getInfo());

// mango.updatePostCount(5);
// console.log(mango.getInfo());

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   login: "Mango",
//   email: "mango@ukr",
// });

// console.log(mango.login);
// mango.login = "Maaaaaaaaaaaaa";
// console.log(mango.login);

// console.log(mango.email);
// mango.email = "poly@ukr";
// console.log(mango.email);

// class Storage {
//   constructor(items = []) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItems(value) {
//     this.items.push(value);
//   }

//   removeItems(value) {
//     const index = this.items.indexOf(value);
//     return this.items.splice(index, 1);
//   }
// }

// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.table(items);

// storage.addItems("🍌");
// console.table(storage.items);

// storage.removeItems("🍋");
// console.table(storage.items);

// const ulEl = document.querySelectorAll("li");

// console.dir(ulEl);

// const img = document.querySelector("#just");
// // img.textContent = "aaaaaaaaaaa";
// console.dir(img);

// // console.log(img.getAttribute("href"));
// img.setAttribute("href", "aaaaaaa");
// // console.log(img.setAttribute("href", "aaaaaaa"));

// const link = document.querySelector("#taste");

// link.classList.add("new-class");
// link.classList.remove("taste-list");
// link.classList.toggle("taste-list");
// link.classList.replace("taste-list", "class");
// console.dir(link.classList.contains("class"));
// console.dir(link);

// const title = document.createElement("h1");
// console.log(title);
// title.textContent = "Це заголовок";
// title.classList.add("page");
// console.log(title);
// document.body.prepend(title);
// console.log(title);

// const options = [
//   { label: "червоний", color: "#F44336" },
//   { label: "зелений", color: "#4CAF50" },
//   { label: "синій", color: "#2196F3" },
//   { label: "сірий", color: "#607D8B" },
//   { label: "рожевий", color: "#E91E63" },
//   { label: "індіго", color: "#3F51B5" },
// ];

// const color = document.querySelector(".js-color-picker");

// const buttonsArr = options.map(({ label, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.textContent = label;
//   buttonEl.classList.add("color-picker-option");
//   buttonEl.style.backgroundColor = color;
//   return buttonEl;
// });

// console.log(buttonsArr);
// color.append(...buttonsArr);

// const transactionHistory = [
//   {
//     id: 1,
//     amount: "1111",
//     date: 2000,
//     business: "ron",
//     name: "Ron",
//     type: "true",
//     account: 1,
//   },
//   {
//     id: 1,
//     amount: "1111",
//     date: 2000,
//     business: "ron",
//     name: "Ron",
//     type: "true",
//     account: 1,
//   },
// ];

// const tableEl = document.querySelector(".js-transaction-table");

// const createMarkup = ({ id, amount, date, business, name, type, account }) => `
// <tr>
// <td>${id}</td>
// <td>${amount}</td>
// <td>${date}</td>
// <td>${business}</td>
// <td>${name}</td>
// <td>${type}</td>
// <td>${account}</td>
// </tr>`;

// const markUp = transactionHistory.map(createMarkup).join("");
// console.log(markUp);

// const tbody = document.querySelector("tbody");
// tbody.insertAdjacentHTML("beforeend", markUp);

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     return this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     return this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const index = this.#items.indexOf(itemToRemove);
//     for (const value of this.#items) {
//       if (value === itemToRemove) {
//         return this.#items.splice(index, 1);
//       }
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padStart(str) {
//     return (this.#value = `${str}` + `${this.#value}`);
//   }
//   padEnd(str) {
//     return (this.#value = `${this.#value}` + `${str}`);
//   }

//   padBoth(str) {
//     return (this.#value = `${str}` + `${this.#value}` + `${str}`);
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// const clickMe = document.querySelector(".js-click");
// // const click = document.querySelector(".js-click-1");
// const box = document.querySelector(".js-box");

// let step = 50;

// clickMe.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.target);
//   // box.style.backgroundColor = "red";
//   step += 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// });

// click.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.target);
//   // box.style.backgroundColor = "red";
//   step -= 50;
//   box.style.marginTop = `${step}px`;
//   box.style.marginLeft = `${step}px`;
// });

// const userName = document.querySelector(".modal-input-1");

// userName.addEventListener("click", (e) => {
//   console.log(e.target.value);
//   // console.log(`My name is ${e.target.value}`);
// });

// userName.addEventListener("focus", (e) => {
//   // console.log(e.target.value);
//   console.log(`My name is ${e.target.value}`);
// });

// const form = document.querySelector(".js-form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const rezerv = e.target.elements;
//   const total = {
//     email: rezerv.email.value,
//     password: rezerv.password.value,
//     comment: rezerv.password.value,
//   };
//   console.log(total);
// });

// const btn = document.querySelector(".openModal");
// const modal = document.querySelector(".modal");

// const closeModal = (event) => {
//   if (event.code === "Escape") modal.classList.remove("open");
//   document.removeEventListener("keydown", closeModal);
// };

// btn.addEventListener("click", (e) => {
//   modal.classList.add("open");
//   document.addEventListener("keydown", closeModal);
// });??
// ?
// ?
// ?
// ?
// /
// const btn = document.querySelector(".openModal");
// const modal = document.querySelector(".modal");

// const closeModal = (e) => {
//   console.log(e.code);
//   if (e.code === "escape") modal.classList.remove("open");
//   document.removeEventListener("keydown", closeModal);
// };

// btn.addEventListener("click", (e) => {
//   modal.classList.toggle("open");
//   document.addEventListener("keydown", closeModal);
// });

const books = [
  {
    id: "1",
    title: "apple",
    author: "Костя",
    img: `./foto/Ellipse.webp`,
    plot: "ййййййййййййййййййййййййййй",
  },
  {
    id: "2",
    title: "huavei",
    author: "Boлодимир",
    img: `./foto/Nazar.webp`,
    plot: "ффффффффффффффффффффффффф",
  },
  {
    id: "3",
    title: "Samsung",
    author: "Іра",
    img: `./foto/Olena.webp`,
    plot: "fffffffffffffffffffffffffffffffffffffff",
  },
];

const list = document.querySelector(".list");
const right = document.querySelector(".right");

const markUp = books
  .map(
    ({ title, id }) =>
      `<li id="${id}"><p>${title}</p><button class="showPreview">Show preview</button></li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", markUp);

const buttons = document.querySelectorAll(".showPreview");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const bookId = event.target.parentNode.id;
    const book = books.find(({ id }) => id === bookId);
    const markUp = `<div>
    <h2>${book.title}</h2>
    <p>${book.author}</p>
    <img src="${book.img}" alt="${book.title}">
    <p>${book.plot}</p>
    </div>`;
    right.innerHTML = markUp;
  })
);
