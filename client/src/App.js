import React from 'react';
import { Routes, Route } from "react-router-dom";

//Pages
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </div>
    );
}

export default App;