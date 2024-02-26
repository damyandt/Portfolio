import { MeHero } from './components/MeHero'
import { Navigation } from './components/Navigation'
import { AboutMe } from './components/AboutMe'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contacts'

function App() {

  return (
    <>
      <Navigation />
      <MeHero />
      <AboutMe />
      <Projects />
      <Contacts />
    </>
  )
}

export default App
