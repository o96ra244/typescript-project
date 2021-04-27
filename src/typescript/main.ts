import Module1 from '@/modules/module1'
import module2 from '@/modules/module2'
import Module3 from '@/module3'

console.log(Module3)

import '../scss/style.scss'

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
