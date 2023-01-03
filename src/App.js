import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import postData from "./data/db.json";

import Home from "./pages/Home";
import DCP15 from "./pages/DCP15";
import DCP16 from "./pages/DCP16";
import NoPage from "./pages/NoPage";
import SinglePost from './pages/SinglePost';
import ScrollToTop from "react-scroll-to-top";

class App extends React.Component {
    state = {
        posts: postData.posts,
        searchInput: ""
    }

    handleChange = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
    };

    render() {
        return <BrowserRouter>
            <header>
                <section id="site-title">
                    <div>
                        <Link to="/" className="title-link"><img src="/assets/badges/badge.png" alt="badge" /></Link>
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
                    onChange={this.handleChange}
                    value={this.state.searchInput}
                    placeholder="search"
                />
            </nav>
            <Routes>
                <Route path="/" element={<Home posts={this.state.posts} search={this.state.searchInput} />} />
                <Route path="/dcp15" element={<DCP15 posts={this.state.posts} search={this.state.searchInput} />} />
                <Route path="/dcp16" element={<DCP16 posts={this.state.posts} search={this.state.searchInput} />} />
                <Route path="/:id" element={<SinglePost posts={this.state.posts} />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            <ScrollToTop smooth className='scroll-to-top' />
        </BrowserRouter >
    }

}

export default App;
