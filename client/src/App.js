import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';

function App() {
    const { user } = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route
                path="login"
                element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
                path="profile/:username"
                element={user ? <Profile /> : <Navigate to="/login" />}
            />
            <Route
                path="register"
                element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route
                path="settings"
                element={user ? <Settings /> : <Navigate to="/" />}
            />
        </Routes>
    );
}

export default App;
