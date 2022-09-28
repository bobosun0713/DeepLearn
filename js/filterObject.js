/**
 * @description
 * 過濾物件屬性
 *
 * @param {object} target 物件資料
 * @param {object[]} ary 需要過濾的屬性

 * @example
 * ```js
 * const obj = { name:'test' , age:99 , email:'test.com' }
 * 
 * filterObject(obj,['name'])
 * // =? { age:99 , email:'test.com' }
 * ```
 */

function filterObject(target, ary = []) {
  if (!ary.length) return target;
  return Object.keys(target)
    .filter((item) => {
      return !ary.includes(item);
    })
    .reduce((acc, crr) => {
      acc[crr] = target[crr];
      return acc;
    }, {});
}

filterObject(obj,['name'])