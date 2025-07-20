// Опис: Є функція, яка приймає суму (число) та тип валюти.

// function convertCurrency({amount, currency}) {
//   console.log(`Converting ${amount} to ${currency}`);
// }

// Завдання:

// Типізуйте параметри функції дозволивши властивості currency лише одне із значень "USD", "EUR", "UAH".
// Типізуйте повернення функції.

//

// ! Variant 1
type Currency = "USD" | "EUR" | "UAH";

function convertCurrency({
  amount,
  currency,
}: {
  amount: number;
  currency: Currency;
}): string {
  return `Converting ${amount} to ${currency}`;
}

console.log(convertCurrency({ amount: 100, currency: "EUR" }));

// ! Variant 2
// type Currenci = "USD" | "EUR" | "UAH";

// type ConvertCurrencyMoney = {
//   amount: number;
//   currenci: Currenci;
// };

// function convertCurrenci({ amount, currenci }: ConvertCurrencyMoney): string {
//   return `Converting ${amount} to ${currenci}`;
// }
// console.log(convertCurrenci({ amount: 100, currenci: "USD" }));
// console.log(convertCurrenci({ amount: 250.5, currenci: "EUR" }));
// console.log(convertCurrenci({ amount: 9999, currenci: "UAH" }));
