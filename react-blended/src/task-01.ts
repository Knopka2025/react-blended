// Є об'єкт settings, який містить налаштування.

// const settings = {
//   darkMode: true,
//   fontSize: 16,
//   language: "en",
// };

// Завдання:

// Створіть тип Settings, який описує цей об'єкт.
// Типізуйте settings через цей тип.

const settings: {darkMode: boolean; fontSize: number; language: string}= {
  darkMode:true,
  fontSize: 16,
  language: "en",
};

console.log(settings);