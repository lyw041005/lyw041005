class Storage {
    /** 
    * @param storage   存储方式localStorage or sessionStorage
    */
    constructor(storage){
        this._storage = storage;
    }
	/** 
    * @param key   键名
    * @param value  键值
    * @param expire  有效期， ms 单位
    */
	set(key,value,expire){
        var obj={value};
        if (expire) {
            obj.t = Date.now() + expire;
        }
        this._storage.setItem(key.toString(),JSON.stringify(obj));
	}
	/**
     * 获取数据
     * @param key   键名
     * @returns     返回键值，如果过期则为空字符串
     */
	get(key){
        var obj = this._storage.getItem(key) ? JSON.parse(this._storage.getItem(key)) : "";
		if (obj && obj.t && obj.t < Date.now()) {
            this.remove(key);
            return "";
        }
		return obj;
	}
	remove(key){
		this._storage.removeItem(key);
	}
}
export const localCache = new Storage(window.localStorage);
export const sessionCache = new Storage(window.sessionStorage);
//使用缓存的页面导入
//import {sessionCache} from '../utils/global.js'
