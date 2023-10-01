import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import About from "./components/About"

export default function Home() {
  return (
    <main>
        <Navbar />
        <Intro />
        <About />
        <Footer />
    </main>
  )
}