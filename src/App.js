import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar.js'
import About from './Pages/About.js'
import Home from './Pages/Home.js'
import Printing from './Pages/Printing.js'
import Shipping from './Pages/Shipping.js'
import DevBranch from './Components/DevBranch.js'

function App() {
    return (
        <div className="App">

            <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
                <Navbar />
                <DevBranch />
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="Shipping" element={<Shipping />} />
                    <Route path="Printing" element={<Printing />} />
                    <Route path="About" element={<About />} />
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
