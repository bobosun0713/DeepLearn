/**
 * @description 比對
 * @param {object[]|array} obj1 物件/陣列資料
 * @param {object[]|array} obj2 物件/陣列資料
 * @return {boolean}
 */

function isEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (const key in obj1) {
    if (isEqual(obj1[key], obj2[key])) {
      continue;
    }
    return false;
  }

  return true;
}

let a = { x: { x: { x: { x: { x: 1, y: 2 } } } } };
let b = { x: { x: { x: { x: { y: 2, x: 1 } } } } };

console.log(isEqual(a, b));
