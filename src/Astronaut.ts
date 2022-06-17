export class Astronaut {
  name: string
  expeditionsNumber = 0
 
  constructor(name: string) {
    this.name = name
  }

  printInfo() {
    return `
      Name: ${this.name}
      Expeditions numbers: ${this.expeditionsNumber}
      `
  }
}
