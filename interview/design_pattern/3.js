// 传统面向对象 static 方法 
// 属于类的 
class Singleton {
  static #instance = null;

  constructor(name) {
    if (Singleton.#instance) {
      return Singleton.#instance;
    }
    this.name = name || "ClassSingleton";
    Singleton.#instance = this;
  }

  static getInstance(name) {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton(name);
    }
    return Singleton.#instance;
  }
}