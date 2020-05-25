// 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
// 进阶:
//     你是否可以在 O(1) 时间复杂度内完成这两种操作？
//
// 示例:
//     LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacitySize = capacity;
    this.capArray = [];
    this.capacity = {};
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.capacity[key]) {
        let i = this.capArray.indexOf(key);
        this.capArray.splice(i, 1);
        this.capArray.unshift(key);
        return this.capacity[key];
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.capArray.includes(key)) {
        let i = this.capArray.indexOf(key);
        this.capArray.splice(i, 1);
        this.capArray.unshift(key);
        this.capacity[key] = value;
        return;
    } else if (this.capArray.length === this.capacitySize) {
        let t = this.capArray.pop();
        delete this.capacity[t];
    }
    this.capArray.unshift(key);
    this.capacity[key] = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(2);
obj.get(2);
obj.put(2, 1);
obj.put(1, 1);
obj.put(2, 3);

console.log(obj);

// [null,-1,null,-1,null,null,2,6]
// ["LRUCache","put","put","put","put","get","get"]
//     [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
