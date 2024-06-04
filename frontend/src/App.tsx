// App.tsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import {AuthProvider} from "./provider/authProvider.tsx";
import LoginPage from "./pages/account/LoginPage.tsx";

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </Layout>
            </Router>
        </AuthProvider>
    );
};

export default App;
