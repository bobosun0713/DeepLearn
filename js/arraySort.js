const ary = [{ id: 1 }, { id: 2 }, { id: 3 }]
const a = [1, 2, 3, 4, 5, 6]

/**
 * @description
 * 陣列排序
 *
 * @param {object[]} data 陣列資料
 * @param {string} sortType 排序模式 預設 asc
 * @param {string} mapKey 排序對應的 key 預設為 id ，如為單純陣列，可不傳
 *
 * @example
 * ```js
 * const a = [ {id:1}, {id:2} , {id:3} ]
 * arraySort(a,'desc','id')
 * // => [ {id:3}, {id:2} , {id:1} ]
 * ```
 */

function arraySort(data, sortType = 'asc', mapKey = 'id') {
  const cloneArray = (ary) => [].concat(ary)
  const proxy = new Proxy(
    {},
    {
      get(obj, key) {
        if (key === 'asc' || key === 'ASC') {
          return cloneArray(data).sort((a, b) => {
            if (typeof a !== 'object') {
              return a > b ? 1 : -1
            }
            return a[mapKey] > b[mapKey] ? 1 : -1
          })
        }

        if (key === 'desc' || key === 'DESC') {
          return cloneArray(data).sort((a, b) => {
            if (typeof a !== 'object') {
              return b > a ? 1 : -1
            }
            return b[mapKey] > a[mapKey] ? 1 : -1
          })
        }

        if (key === 'default') return cloneArray(data)
        throw new Error('sorting rules error')
      },
    }
  )
  return proxy[sortType]
}
