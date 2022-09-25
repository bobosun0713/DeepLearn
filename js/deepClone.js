/**
 * 深拷貝
 * @param {(object|object[])} obj 陣列 / 物件 * 
 * 
 * @example
 * ```js
 * const obj = {name:'test',food:'apple'}
 * const cloneObj = deepClone(obj)
 * ```
 */

function deepClone(obj) {
    if (typeof obj !== 'object' || typeof obj === null) return obj

    const cloneObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        cloneObj[key] = deepClone(obj[key])
    }

    return cloneObj
}


