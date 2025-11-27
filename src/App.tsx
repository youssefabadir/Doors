
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home';
import About from './pages/about/About';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                {/* --- PERSISTENT HEADER --- */}
                <header>
                    <div className="container">
                        <nav>
                            <div className="logo">
                                {/* Wrap Logo in Link to go home */}
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    DOORS <span>REAL ESTATE</span>
                                </Link>
                            </div>
                            <ul className="nav-links">
                                <li><Link to="/about">About</Link></li>
                                <li><a href="/#explore">Consultancy</a></li>
                                <li><a href="/#explore">Brokerage</a></li>
                            </ul>
                            <a href="#contact" className="btn btn-primary">Get in Touch</a>
                        </nav>
                    </div>
                </header>

                {/* --- DYNAMIC CONTENT --- */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>

                {/* --- PERSISTENT FOOTER --- */}
                <footer id="contact">
                    <div className="container">
                        <div className="footer-content">
                            <div>
                                {/* You can add footer logo or links here */}
                            </div>
                            <div className="copyright">
                                &copy; 2025 Doors Real Estate. All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;