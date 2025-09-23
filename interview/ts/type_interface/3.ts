interface Animal {
    name: string;
}

interface Animal {
    age: number
}
const dragon:Animal = { name: '奶龙', age: 2}
// 不可以
type AnimalType = {name: string}
type AnimalType = {age: number}