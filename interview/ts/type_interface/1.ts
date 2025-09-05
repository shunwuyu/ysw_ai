// js 弱类型，容易出问题 
// ts带来类型的约束
// ts 是微软 想让java 工程师写前端 
// react + ts 是开发的标配 
// 自定义类型 
// interface关键字 
interface UserDemo {
    name: string;
    age: number
}
// 相同点，都可以申明自定义类型
type UserType = {
    name: string
    age: number
}

const u1:UserDemo = {name: 'Alice', age: 20 };
const u2:UserType = {name: 'Bob', age: 22};