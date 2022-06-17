import { Rocket } from './Rocket'
import crypto from 'crypto'

type ExpeditionStatus = 'READY' | 'IN PROGRES' | 'COMPLETED'

const expeditionsResults = [
  `We found a new planet. We call it "${crypto
    .randomBytes(2)
    .toString('hex')}" 🌎`,
  'Our ship has a problem with the engine. We had to stop the expedition 😞',
  'We meet the different expedition. We made an epic party 🥳',
  'We got lost in space. But the aliens found us and bring back to home 👽',
]

const getResults = () => {
  return expeditionsResults[
    Math.floor(Math.random() * expeditionsResults.length)
  ]
}

export class Expedition {
  name: string
  goal: string
  rocket: Rocket
  status: ExpeditionStatus = 'READY'
  results?: string

  constructor(name: string, goal: string, rocket: Rocket) {
    this.name = name
    this.goal = goal
    this.rocket = rocket
  }

  launch() {
    if (this.status === 'READY') {
      this.status = 'IN PROGRES'
    }
  }

  finish() {
    if (this.status === 'IN PROGRES') {
      this.status = 'COMPLETED'
      this.results = getResults()

      this.rocket.astronauts.forEach((astro) => {
        astro.expeditionsNumber++
      })
    }
  }
}
