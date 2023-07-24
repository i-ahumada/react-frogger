import { BrowserRouter } from 'react-router-dom'
import { Footer, Navbar, Hero, Docs, Downloads } from './components'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Docs />
      <Downloads />
      <Footer />
    </BrowserRouter>
  )
}

export default App
