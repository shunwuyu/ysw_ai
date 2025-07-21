const message: string = "Hello TypeScript";
console.log(message);

const count: number = 10;
const title: string = "Hello TS";
const isDone: boolean = false;
// const list: number[] = [1, "2", 3];
// 元组 Tuple
const tuple: [string, number] = ["age", 25];
// 枚举 Enum
enum Status {
    Pending,
    Success,
    Fail
}
  
const s: Status = Status.Success;
console.log(s);

interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
}
  
const user: User = { name: "Tom", age: 22 };