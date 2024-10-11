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

const TRANSACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  getBalance() {
    return this.balance;
  },
  createTransactions(amount, type) {
    return {
      amount,
      type,
      id: this.transactions.length + 1,
    };
  },
  deposit(amount) {
    if (typeof amount === "number" && amount > 0) {
      const transaction = this.createTransactions(amount, TRANSACTIONS.DEPOSIT);
      this.transactions.push(transaction);
      this.balance += amount;
    } else {
      console.error("Не валідні дані");
    }
  },
  withdraw(amount) {
    if (typeof amount === "number" && amount > 0 && amount <= this.balance) {
      const transaction = this.createTransactions(
        amount,
        TRANSACTIONS.WITHDRAW
      );
      this.transactions.push(transaction);
      this.balance -= amount;
    } else {
      console.error("Не валідні дані");
    }
  },
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (id === transaction.id) {
        return transaction;
      }
    }
    return null;
  },
  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        total += transaction.amount;
      }
    }
    return total;
  },
};
// console.log(account.getBalance());
account.deposit(10);
account.deposit(1000);
account.deposit(5000);
account.withdraw(5000);
account.withdraw(100);
account.deposit(800);
// console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal(TRANSACTIONS.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTIONS.WITHDRAW));
console.log(account);
