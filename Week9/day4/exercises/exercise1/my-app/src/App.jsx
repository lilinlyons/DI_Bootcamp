import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./component/ErrorBoundaries";

const Home = () => {
    return (
        <>
            <h2>Homepage</h2>
        </>
    );
};

const Profile = () => {
    return (
        <>
            <h2>Profile Screen</h2>
        </>
    );
};

const Shop = () => {
    throw new Error("Shop component crashed!");

    return (
        <div>
            <h2>My Shop</h2>
            {/* Any other components that might throw errors */}
        </div>
    );
};

function App() {
    return (
        <Router>
            <nav>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>Profile</NavLink>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>Shop</NavLink>
            </nav>
            <Routes>
                <Route exact path="/" {
                    <ErrorBoundary>
                        <Home />
                    </ErrorBoundary>
                } />
                <Route exact path="/profile" element={
                    <ErrorBoundary>
                        <Profile />
                    </ErrorBoundary>
                } />
                <Route exact path="/shop" {
                    <ErrorBoundary>
                        <Shop />
                    </ErrorBoundary>
                } />
            </Routes>
        </Router>
    );
}

export default App;
