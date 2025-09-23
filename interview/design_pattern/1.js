// 设计模式是针对接口的编程，而不是实现
// 当有一系列相关对象需要创建，但不知道在运行时会创建哪一个。
// 工厂模式是一种创建型设计模式，它提供了一个创建对象的接口，
// 但由子类决定要实例化的类是哪一个，从而**将对象的创建过程**封装起来，
// 使代码更灵活、可扩展。
// 圆形
class Circle {
  constructor(radius) {
    this.radius = radius
  }
  area() {
    return Math.PI * this.radius * this.radius
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height
  }
}
// 工厂类
class ShapeFactory {
  static createShape(type, options) {
    switch (type) {
      case 'circle': 
        return new Circle(options.radius);
      case 'rectangle':
        return new Rectangle(options.width, options.height);
      default:
        throw new Error("Unknown shape type");
    }
  }
}
// 统一的工厂接口
const circle = ShapeFactory.createShape('circle', { radius: 5 });
const rectangle = ShapeFactory.createShape('rectangle', { width: 4, height: 6 });

console.log(circle.area());
console.log(rectangle.area());