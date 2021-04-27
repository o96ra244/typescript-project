export default class Module1 {
  public vari: string

  constructor() {
    this.vari = 'module1プロパティだよ'
  }

  public getVari(): string {
    return this.vari
  }
}
