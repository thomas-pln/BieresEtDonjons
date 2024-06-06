import React, { createContext, useEffect, useContext, useState } from 'react';
import {setAuthToken} from "./b&dProvider.ts";

interface AuthContextType {
    login: (tokens: {access: string, refresh: string}) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');
        if (accessToken && refreshToken) {
            setAuthToken({access: accessToken, refresh: refreshToken});
            setIsAuthenticated(true);
        }
    }, []);

    const login = (tokens: {access: string, refresh: string}) => {
        localStorage.setItem('access_token', tokens.access);
        localStorage.setItem('refresh_token', tokens.refresh);
        setAuthToken(tokens); // Pass both tokens to setAuthToken
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setAuthToken(null); // Clear the auth header
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{login, logout, isAuthenticated }}> {/* Inclure isAuthenticated dans la valeur du contexte */}
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuth };
