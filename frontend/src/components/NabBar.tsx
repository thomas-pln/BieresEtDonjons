import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.gif';
import {useAuth} from "../provider/authProvider.tsx";

interface Page {
    tag: string;
    to: string;
}

const pages: Page[] = [
    { tag: 'Home', to: '/' },
    { tag: 'Jeux', to: '/games' },
    { tag: 'Carte', to: '/drinks' },
    { tag: 'Evenements', to: '/events' }
];
const settings = ['Profile', 'Account', 'Logout'];

const AppNavBar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const {isAuthenticated} = useAuth();

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar style={{   background:'#03224c' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} alt="Logo" style={{height: '100px', marginRight: '20px'}}/>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Bières & Donjon
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.tag} onClick={handleCloseNavMenu} component={Link} to={page.to}>
                                    <Typography textAlign="center">{page.tag}</Typography>
                                </MenuItem>
                            ))}
                            {
                                !isAuthenticated &&
                                <div>
                                    <MenuItem onClick={handleCloseNavMenu} component={Link} to="/login">
                                        <Typography textAlign="center">Se connecter</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu} component={Link} to="/signup">
                                        <Typography textAlign="center">S'inscrire</Typography>
                                    </MenuItem>
                                </div>
                            }
                        </Menu>
                    </Box>

                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Button
                                key={page.tag}
                                component={Link}
                                to={page.to}
                                onClick={handleCloseNavMenu}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.tag}
                            </Button>
                        ))}
                        {
                            !isAuthenticated &&
                            <Box sx={{ml: 'auto', display: {xs: 'none', md: 'flex'}}}>
                                <Button
                                    component={Link}
                                    to="/login"
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    Se Connecter
                                </Button>
                                <Button
                                    component={Link}
                                    to="/signup"
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    S'Inscrire
                                </Button>
                            </Box>
                        }
                    </Box>
                    {
                        isAuthenticated && (
                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title="Autres">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <AccountCircleIcon fontSize={"large"} style={{fontSize: 60, color: '#ffffff'}}  />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu} component={Link}
                                                  to={`/${setting.toLowerCase()}`}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        )
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default AppNavBar;
