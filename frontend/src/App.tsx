// App.tsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import {AuthProvider} from "./provider/authProvider.tsx";
import LoginPage from "./pages/account/LoginPage.tsx";
import GamesPage from "./pages/GamesPage.tsx";
import DrinkPage from "./pages/DrinkPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import LogoutPage from "./pages/account/LogoutPage.tsx";
import RegisterPage from "./pages/account/RegisterPage.tsx";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/logout" element={<LogoutPage/>}/>
                        <Route path="/signup" element={<RegisterPage/>}/>
                        <Route path="/games" element={<GamesPage/>}/>
                        <Route path="/drinks" element={<DrinkPage/>}/>
                        <Route path="/events" element={<EventsPage/>}/>
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
};

export default App;
