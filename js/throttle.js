/**
 * @description 節流
 * @param {function} fn 傳入要被執行的函式
 * @param {number} delay 延遲幾毫後觸發 預設500ms
 *
 * @example
 * ```js
 * function callFn(msg){ console.log('trigger ' + msg)}
 * const throttleFn = throttle(callFn,300)
 * ```
 */

function throttle(fn, delay = 500) {
  let prevTime = Date.now()
  return function () {
    const args = arguments
    let currentTime = Date.now()
    if (currentTime - prevTime >= delay) {
      fn.apply(this, args)
      prevTime = currentTime
    }
  }
}
