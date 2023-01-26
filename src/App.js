import './App.css';
import { useState } from 'react';
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { db } from "./data/db.js";

import Home from "./pages/Home";
import DCP15 from "./pages/DCP15";
import DCP16 from "./pages/DCP16";
import NoPage from "./pages/NoPage";
import SinglePost from './pages/SinglePost';
import ScrollToTop from "react-scroll-to-top";

import badge from "./images/badges/badge.png";

function App() {
    const [posts] = useState(db);
    const [searchInput, setSearchInput] = useState("");

    function handleChange(e) {
        setSearchInput(e.target.value)
    };

        return <HashRouter>
            <header>
                <section id="site-title">
                    <div>
                        <Link to="/" className="title-link"><img src={badge} alt="badge" /></Link>
                    </div>
                    <div className="site-title-text">
                        <h1><Link to="/" className="title-link">MY Adventure Blog</Link></h1>
                        <h2><Link to="/" className="tag-link">Adventures in Disney and beyond!</Link></h2>
                    </div>
                </section>
            </header>
            <nav>
                <a href="https://ryanmontville.com">RyanMontville.com</a>
                <Link to="/">View All Posts</Link>
                <Link to="/dcp15">DCP 15</Link>
                <Link to="/dcp16">DCP 16</Link>
                <input
                    type="text"
                    onChange={handleChange}
                    value={searchInput}
                    placeholder="search"
                />
            </nav>
            <Routes>
                <Route path="/" element={<Home posts={posts} search={searchInput} />} />
                <Route path="/dcp15" element={<DCP15 posts={posts} search={searchInput} />} />
                <Route path="/dcp16" element={<DCP16 posts={posts} search={searchInput} />} />
                <Route path="/:id" element={<SinglePost posts={posts} />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <ScrollToTop smooth className='scroll-to-top' />
        </HashRouter>
    }

export default App;
