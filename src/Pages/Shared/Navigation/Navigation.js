import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { user, handleLogOut } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        handleLogOut();
        navigate('/');
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#ed6c02' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' }

                        }}
                    >
                        Riza's Parlour
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem
                                onClick={handleCloseNavMenu}>
                                <Link
                                    to='/'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography textAlign="center">
                                        Home
                                    </Typography>
                                </Link>

                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}>
                                <HashLink to='/home#services' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Services
                                    </Typography>
                                </HashLink>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}>
                                <HashLink to='/home#about' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        About us
                                    </Typography>
                                </HashLink>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}>
                                <HashLink to='/home#gallery' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Gallery
                                    </Typography>
                                </HashLink>
                            </MenuItem>
                            <MenuItem
                                onClick={handleCloseNavMenu}>
                                <HashLink to='/home#testimonials' style={{ textDecoration: 'none' }}>
                                    <Typography textAlign="center">
                                        Testimonials
                                    </Typography>
                                </HashLink>
                            </MenuItem>
                            {user.email && <MenuItem
                                onClick={handleCloseNavMenu}>
                                <Link
                                    to='/dashboard'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <Typography textAlign="center">
                                        Dashboard
                                    </Typography>
                                </Link>

                            </MenuItem>}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1, display: { xs: 'flex', md: 'none' },
                            fontFamily: 'Tangerine',
                            fontWeight: 800
                        }}
                    >
                        Riza's Parlour
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link
                            to='/home'
                            style={{ textDecoration: 'none' }}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Home
                            </Button>
                        </Link>

                        <HashLink
                            to='/home#services'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                services
                            </Button>
                        </HashLink>
                        <HashLink
                            to='/home#about'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                about us
                            </Button>
                        </HashLink>
                        <HashLink
                            to='/home#gallery'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                gallery
                            </Button>
                        </HashLink>
                        <HashLink
                            to='/home#testimonials'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                testimonials
                            </Button>
                        </HashLink>
                        <HashLink
                            to='/home#contact'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                contact us
                            </Button>
                        </HashLink>
                        {user.email && <Link
                            to='/dashboard'
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                dashboard
                            </Button>
                        </Link>}
                    </Box>

                    {/* avatar part  */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {user.photoURL ? <Avatar alt={user.displayName} src={user.photoURL} />
                                    :
                                    <Avatar alt={user.displayName} src='ad/asd' />}
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
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

                            {user.email ? <MenuItem onClick={handleSignOut}>
                                <Typography textAlign="center">
                                    Logout
                                </Typography>
                            </MenuItem>
                                :
                                <Link
                                    to='/dashboard'
                                    style={{ textDecoration: 'none' }}
                                >
                                    <MenuItem>
                                        <Typography textAlign="center">
                                            Login
                                        </Typography>
                                    </MenuItem>
                                </Link>}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navigation;