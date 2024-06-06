import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useAuth} from "../../provider/authProvider.tsx";
import {loginToken} from "../../provider/b&dProvider.ts";

const LoginPage: React.FC = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const tokens = await loginToken(email, password);
            login(tokens);
            navigate('/');
        } catch (e) {
            setError('Invalid credentials');
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 8
                }}
            >
                <Typography component="h1" variant="h5">
                    Se Connecter
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            sx: {
                                background: 'white'
                            }
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            sx: {
                                background: 'white'
                            }
                        }}
                    />
                    {error && <Typography color="error">{error}</Typography>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{mt: 3, mb: 2}}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
