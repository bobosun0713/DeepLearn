/**
 * @description
 * 防抖動
 *
 * @param {function} fn 傳入要被執行的函式
 * @param {number} delay 延遲幾毫後觸發 預設500ms
 *
 * @example
 * ```js
 * function callFn(msg){ console.log('trigger ' + msg)}
 * const debounceFn = debounce(callFn,300)
 * debounceFn(1)
 * ```
 */

function debounce(fn, delay = 500) {
  let timer = null
  return function () {
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
