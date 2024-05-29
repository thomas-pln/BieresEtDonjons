// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/account/LoginPage.tsx';

const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default App;
