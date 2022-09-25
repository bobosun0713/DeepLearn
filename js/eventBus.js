
/**
 * 訂閱模式
 * 
 * @example
 * ```js
 * const bus = new eventBus()
 * // 註冊事件
 * const bus.$on('test',callback)
 * // 觸發事件
 * const bus.$emit('test', arg1 , arg2)
 * // 取消事件
 * const bus.$off('test', callback)
 *  // 清除所有事件
 * const bus.$clear()
 * ```
 */
function eventBus() {
    /**
     * event 存儲容器
     */
	const eventBus = new Map();
	return {

        /**
         * 註冊事件
         * @param {string} type 事件類型名稱
         * @param {function} fn callBack 函式
         */
		$on(type, fn) {
			const event = eventBus.get(type);
			const isEmpty = event && event.push(fn);
			if (!isEmpty) eventBus.set(type, [fn]);
		},
		
        /**
         * 取消事件 
         * @param {string} type 事件類型名稱
         * @param  {function} fn callBack 函式
         */
		$off(type, fn) {
			const event = eventBus.get(type);
			const eventFindIndex = event.findIndex((f) => f.name === fn.name);
			event.splice(eventFindIndex, 1);
		},
		
        /**
         * 觸發事件
         * @param {string} type 事件類型名稱
         * @param  {any} args 傳遞參數
         */
		$emit(type, ...args) {
			const currentType = type === "$" ? "$" : type;
			eventBus.get(currentType)?.forEach((fn) => fn && fn(args));
		},
		
        /**
         * 清除所有事件
         */
		$clear() {
			eventBus.clear();
		}
	};
}

