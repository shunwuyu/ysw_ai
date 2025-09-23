interface Person {
    name: string
}
// 继承 
interface Employee extends Person {
    job: string
}
// 类型声明
type PersonType = {name: string}
type EmployeeType = PersonType & { job: string }