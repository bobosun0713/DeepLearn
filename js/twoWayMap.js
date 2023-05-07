/**
 * @description 物件-雙向映射
 * @param {object} target 物件
 * @return {object}
 * 
 * @example
 * ```js
 * const obj = {name:'test'}
 * 
 * twoWayMap(obj).getKey('test') 
 * // => name
 * twoWayMap(obj).getValue('name') 
 * // => test 
 * ```
 */

// two-way mapping
function twoWayMap(target) {
  const map = target;
  const reverseMap = {};
  for (const key in map) {
    const value = map[key];
    reverseMap[value] = key;
  }
  return {
    /**
     * @param {key} 取的 key 的 value
     */
    getValue(key) {
      return map[key];
    },
     /**
     * @param {key} 以 value 當作 key，返回 value 的 key
     */
    getKey(key) {
      return reverseMap[key];
    }
  };
}
