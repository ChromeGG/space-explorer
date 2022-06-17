import { Astronaut } from './src/Astronaut'
import { Expedition } from './src/Expedition'
import { Rocket } from './src/Rocket'

const astro1 = new Astronaut('Elon Musk')

const apolloRocket = new Rocket('Millennium Falcon ')
apolloRocket.addAstronaut(astro1)

const expedition = new Expedition('Apollo 2136', 'Test new engines', apolloRocket)

expedition.launch()
expedition.finish()

console.log(expedition.results)

const astro2 = new Astronaut('Wieslav Paletta')

apolloRocket.addAstronaut(astro2)

const expedition2 = new Expedition('Interstellar 420', 'Just chill out', apolloRocket)

expedition2.launch()
expedition2.finish()

console.log(expedition2.results)

console.log('Astro 1: ', astro1.printInfo())
console.log('Astro 2: ', astro2.printInfo())