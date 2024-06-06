import React, { useEffect } from 'react';
import {useAuth} from "../../provider/authProvider.tsx";
import { useNavigate } from 'react-router-dom';

const LogoutPage: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        logout();
        navigate('/');
    }, [logout, navigate]);

    return null;
};

export default LogoutPage;