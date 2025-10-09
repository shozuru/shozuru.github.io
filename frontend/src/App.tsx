import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import TopNavigation from './components/TopNavigation'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Contact from './components/pages/Contact/Contact'
import Projects from './components/pages/Projects/Projects'
import ScrollToTop from './components/ScrollToTop'

function App() {

    return (
        <>
            <Router>
                <ScrollToTop />
                <TopNavigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
