import React from 'react'
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Routes>


        </div>
    )
}

export default App



