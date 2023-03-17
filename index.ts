// TS vs JS
// const dimensions = { width: 5, height: 5 }
// console.log(dimensions.heigth)
//TS: Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
//JS: logs undefined

// Basic Types

// Primitive types: string, number, boolean
// const fullName: string = 'John Doe'
// const age: number = 12
// let isBusy: boolean = false
//
// isBusy = 'no'
//Error: Type 'string' is not assignable to type 'boolean'

// any
// let wildCard: any
// wildCard = 2
// wildCard = 'hello'
// wildCard = null

// Arrays
const fruits: string[] = ['apple', 'orange', 'banana']
const oddNumbers: Array<number> = [1, 3, 5, 7, 9]

// Object Types
// const forest: {name: string, age: number, kind: string} = {name: "Forest", age: 6, kind: "dog"}
// type aliases
// type Pet = {
//   name: string
//   age: number
//   kind: string
// }
//
// interface Pet {
//   name: string
//   age: number
//   kind: string
// }

// type Animal = {
//   kind: string
// }
//
// type Dog = Animal & {
//   bark: "woof"
// }
//
// interface Animal {
//   kind: string
// }
//
// interface Dog extends Animal {
//   bark: "woof"
// }
//
// const dog: Dog = {kind: "dog", bark: "woof"}
//
// console.log(dog.bark)

// Adding new fields to interface
// interface Dog {
//   kind: string
// }
//
// interface Dog {
//   bark: "woof"
// }
//
// const dog: Dog = {kind: "dog", bark: "woof"}

// types cannot be changed after being created
// type Dog = {
//   kind: string
// }
//
// type Dog = {
//   bark: "woof"
// }

// UNION TYPES
// type StringOrNumber = string | number
//
// let one: StringOrNumber  = "x"
// one = 1
//
// type StrNumArr = (string | number)[]
// Array<string | number>
// StringOrNumber[]
// Array<StringOrNumber>
//
// const arr: StrNumArr = [1, "two", 3, "four"]

// FUNCTION TYPES
//
// type NumToStringFn = (num: number) => string
//
// interface NumToStringFn {
//   (num: number): string
// }
//
// const numToString = (num: number): string => num.toString()
//
// const numToString: NumToStringFn = (num) => num.toString()

// GENERICS
// type Duplicate<T> = (item: T) => T[] 
//
// const duplicateNum: Duplicate<any> = (item) => [item , item]
//
// interface Option<T> {
//   label: string
//   value: T
// }
//
// const stringOption: Option<string> = {
//   label: 'label',
//   value: 'string'
// }
//
// const numberOption: Option<number> = {
//   label: 'label',
//   value: 0
// }

// TYPE ASSERTIONS
// type StrOrNum = string | number
// let greet = 'hello'
//
// const shout = (word: StrOrNum): void => {
//   console.log(( word as string ).toUpperCase())
// }
//
// shout(greet)

// TYPE ASSERTIONS
type StrOrUndefined = string | undefined
let greet = 'hello'

const shout = (word: StrOrUndefined): void => {
  console.log(word!.toUpperCase())
}

shout(greet)
