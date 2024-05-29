// components/Footer.tsx
import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                py: 3,
                backgroundColor: 'primary.main',
                color: 'white',
                mt: 'auto',
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            MyApp
                        </Typography>
                        <Typography variant="body2">
                            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Home
                        </Link>
                        <Link href="/login" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Login
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            Email: contact@myapp.com
                        </Typography>
                        <Typography variant="body2">
                            Phone: +123 456 7890
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
