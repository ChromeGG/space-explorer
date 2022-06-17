export class Astronaut {
  name: string
  expeditionsNumber = 0
 
  constructor(name: string) {
    this.name = name
  }

  static create() {
    const name = prompt('Name: ') || ''
    return new Astronaut(name)
  }

  printInfo() {
    return `
      Name: ${this.name}
      Expeditions numbers: ${this.expeditionsNumber}
      `
  }
}