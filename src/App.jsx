import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PerformanceSection from './components/PerformanceSection'
import KeyCapabilities from './components/KeyCapabilities'
import CaseStudy from './components/CaseStudy'
import NextSteps from './components/NextSteps'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PerformanceSection />
      <KeyCapabilities />
      <CaseStudy />
      <NextSteps />
      <Footer />
    </div>
  )
}

export default App
