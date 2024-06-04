import React from 'react';
import { Container, Box } from '@mui/material';
import AppNavBar from "./NabBar.tsx";
import Footer from "./Footer.tsx";

const Layout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <Box display="flex" flexDirection="column" minHeight="100vh" width="auto">
            <AppNavBar />
            <Container component="main" sx={{ flex: 1, mt: 8, mb: 2 }}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;
