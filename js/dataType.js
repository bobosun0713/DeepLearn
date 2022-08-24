/**
 * @description
 * 型別檢查，當傳入兩個參數時，為型別比對
 *
 * @param {function} target 隨意型別
 * @param {string} type 需要對比的型別，
 *
 * @example
 * ```js
 * const a = []
 * dataType(a)
 * //  => 'array'
 *
 * dataType(a,'array')
 * //  => true
 * ```
 */

function dataType(target, type) {
  const checkType = Object.prototype.toString
    .call(target)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase()
  return type ? type === checkType : checkType
}
