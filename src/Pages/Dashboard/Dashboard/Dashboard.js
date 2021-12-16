import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Link, Routes } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import AddService from '../AddService/AddService';
import ManageServices from '../ManageServices/ManageServices';
import ManageAppointments from '../ManageAppointments/ManageAppointments';

const drawerWidth = 240;

function Dashboard(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { window } = props;

    // const { handleLogOut, admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar sx={{ backgroundColor: '#ed6c02' }} />
            <Divider />

            <List>
                <Box>

                    <Link to={`payment`} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                payment
                            </Typography>
                        </ListItem>
                    </Link>

                    <Link to={`myorders`} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                my orders
                            </Typography>
                        </ListItem>
                    </Link>

                    <Link to={'review'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                give review
                            </Typography>
                        </ListItem>
                    </Link>
                </Box>
                <Box>
                    <Link to={'addservice'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                add service
                            </Typography>
                        </ListItem>

                    </Link>

                    <Link to={'manageservice'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                manage services
                            </Typography>
                        </ListItem>
                    </Link>

                    <Link to={'appointments'} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                appointments
                            </Typography>
                        </ListItem>
                    </Link>

                    <Link to={"makeadmin"} style={{ textDecoration: 'none' }}>
                        <ListItem button >
                            <Typography
                                variant="button" display="block" color="secondary"
                                sx={{
                                    ml: 5
                                }}>
                                make an admin
                            </Typography>
                        </ListItem>
                    </Link>
                </Box>
            </List>
            <Divider />
            <List>
                <ListItem button >
                    <Typography
                        variant="button" display="block" color="secondary"
                        sx={{
                            ml: 5
                        }}>
                        Log out
                    </Typography>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#ed6c02'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Link to='/home'>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <HomeIcon sx={{ fontSize: { md: 40, sx: 35 }, color: 'white' }} />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, px: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Routes>
                    <Route path="myorders" element={<MyOrders />} />
                    <Route path="review" element={<Review />} />
                    <Route path="addservice" element={<AddService />} />
                    <Route path="manageservice" element={<ManageServices />} />
                    <Route path="appointments" element={<ManageAppointments />} />
                </Routes>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
