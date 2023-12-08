// function keltocel(kelvin, decimalPlaces = 2) {
//   const celsius = kelvin - 273.15;
//   return celsius.toFixed(decimalPlaces);
// }

// module.exports = {
//   keltocel,
// };
// script.js

// ฟังก์ชันคำนวณเคลวินเป็นเซลเซียส
export function keltocel(kelvin) {
  return kelvin - 273.15;
}

// ทำให้ฟังก์ชันสามารถใช้งานจากภายนอกได้
module.exports = {
  keltocel,
};
