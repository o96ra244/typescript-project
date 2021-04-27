import Module1 from '@/modules/module1'
import module2 from '@/modules/module2'
import Module3 from '@/module3'

import '../scss/style.scss'

console.log(Module3)

const str: string = 'typescript テスト'
console.log(str)

const module1 = new Module1()
console.log(module1.getVari())

// const module2 = () => import('@/modules/module2')
export async function outModule2() {
  const m2 = await module2
  return m2
}
outModule2().then((r) => {
  console.log(r)
})

const module3 = () => import('./module3')
console.log(module3())

const specTest: string = 'Hello! TypeScript And Jest!'
export { specTest }

//// TypeScriptについて
// - プリミティブ

// -----------------------------------------
// - string
let varString: string
varString = 'ABC'
varString = 'DEF'
// varString = 123 // Error
console.log(varString)

// -----------------------------------------

// - number
let varNumber: number
varNumber = 123
varNumber = 1.23
varNumber = -123
// varNumber = '123' // Error
console.log(varNumber)

// -----------------------------------------

// - boolean
let varBoolean: boolean
varBoolean = true
varBoolean = false
// varBoolean = 'true' // Error
console.log(varBoolean)

// -----------------------------------------

// - 配列
let varBoolArray: boolean[]
varBoolArray = [true, false]
// varBoolArray = [true, 123] // Error
console.log(varBoolArray)

let varStringArray: string[]
varStringArray = ['abc', 'def']
// varStringArray = [123, 'XXX'] // Error
console.log(varStringArray)

let varTuple: [number, string] // タプル型
varTuple = [123, 'def']
// varTuple = [123, true] // Error
console.log(varTuple)

// -----------------------------------------

// - 関数
function calc(num: number): number {
  // return num * 2 + 'px' // 文字列にキャストされるのでError
  return num * 2
}
console.log(calc(10))
// console.log(calc('10')) // Error

// -----------------------------------------

// - any
// - null
// - undefined
// - void

// -----------------------------------------

// インターフェース
interface IUser {
  name: string
  age: number
}
const user: IUser = {
  name: 'Tanaka',
  age: 25,
}
console.log(user)

// -----------------------------------------

// Typeエイリアス
// プリミティブ
type TStringOrNumber = string | number // Union型
let stringOrNumber: TStringOrNumber
stringOrNumber = 'ABC'
stringOrNumber = 123
// stringOrNumber = true // Error
console.log(stringOrNumber)

// 関数
type TCallback = () => void
function execCallback(callback: TCallback) {
  console.log('I call callback')
  callback()
}
const myCallback = () => {
  console.log('This is my callback')
}
execCallback(myCallback)

// -----------------------------------------
// クラス
interface IClassA {
  name: string
  getName: () => string
}
class MyClassA {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
const personA: IClassA = new MyClassA('tanaka')
console.log(personA)

interface IClassB {
  name: string
  getName: () => string
}
class MyClassB implements IClassB {
  name: string
  constructor(name: string) {
    this.name = name
  }
  getName() {
    return this.name
  }
}
const personB = new MyClassB('satou')
console.log(personB)
