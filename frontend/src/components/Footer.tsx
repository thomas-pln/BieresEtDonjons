// components/Footer.tsx
import React from 'react';
import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            alignContent="center"
            sx={{
                width: '100vw',
                py: 3,
                background:'#03224c',
                color: 'white',
                mt: 'auto',
            }}
        >
            <Container>
                <Grid container spacing={4} width="auto">
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Bières & Donjon
                        </Typography>
                        <Typography variant="body2">
                            Avec amour &copy; {new Date().getFullYear()} Bières & Donjon. <br/>
                            All rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <Link href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                            Home
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2">
                            Email: contact@bieres&donjon.fr
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
