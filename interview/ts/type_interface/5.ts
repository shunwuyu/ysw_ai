interface AddFn {
    (a: number, b: number): number
}

type AddType = (a:number, b: number) => number
// 类型的别名 
type NumberOther = number;

let a:NumberOther = 22