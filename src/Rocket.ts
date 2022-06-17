import { Astronaut } from './Astronaut'

export class Rocket {
  name: string
  astronauts: Astronaut[] = []

  constructor(name: string) {
    this.name = name
  }

  addAstronaut(astronaut: Astronaut) {
    this.astronauts.push(astronaut)
  }

  removeAstronaut(astronaut: Astronaut) {
    const index = this.astronauts.indexOf(astronaut)
    if (index !== -1) {
      this.astronauts.splice(index, 1)
    }
  }

  listAstronauts() {
    console.log(this.astronauts.forEach(astro => {
      astro.printInfo()
    }))
  }
}