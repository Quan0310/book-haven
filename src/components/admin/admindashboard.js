import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';

import { useMemo } from 'react';
import { Link, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import UserPage from './pages/user/user-view';
import AddUser from './pages/user/action/add-user';

const drawerWidth = 280;
const usePathname = () => {
    const { pathname } = useLocation();

    return useMemo(() => pathname, [pathname]);
}

const navListItems = [
    {
        title: 'dashboard',
        path: '/admin',
        icon: 'ic_analytics',
    },
    {
        title: 'user',
        path: '/admin/listuser',
        icon: 'ic_user',
    },
    {
        title: 'product',
        path: '/admin/listproduct',
        icon: 'ic_cart',
    },
    {
        title: 'blog',
        path: '/blog',
        icon: 'ic_blog',
    },
    {
        title: 'login',
        path: '/login',
        icon: 'ic_lock',
    },
    {
        title: 'Not found',
        path: '/404',
        icon: 'ic_disabled',
    },
];
function NavItem({ item }) {
    const pathname = usePathname();
    const active = item.path === pathname;
    return (
        <ListItemButton
            component={Link}
            to={item.path}
            sx={{
                minHeight: 44,
                borderRadius: 0.75,
                typography: 'body2',
                color: 'text.secondary',
                textTransform: 'capitalize',
                fontWeight: '500',
                ...(active && {
                    color: 'primary.main',
                    fontWeight: '600',
                    bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                    '&:hover': {
                        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
                    },
                }),
            }}
        >
            <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
                {/* {item.icon} */}
            </Box>

            <Box component="span">{item.title} </Box>
        </ListItemButton>
    );
}

function AdminDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const drawer = (
        <div>
            <Toolbar sx={{ marginTop: '5px', marginLeft: '20px' }}>
                <Typography sx={{ color: '#6868AC', fontWeight: '500' }} variant="h5">BookHaven</Typography>
            </Toolbar>
            {/* <Divider /> */}
            <Box
                sx={{
                    my: 3,
                    mx: 2.5,
                    py: 2,
                    px: 2.5,
                    display: 'flex',
                    borderRadius: 1.5,
                    alignItems: 'center',
                    bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
                }}
            >
                <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgFqGe2wqjBEPl-RjXeFyhTABoxVgf6RbgJZVVCMqHg&s'} alt="photoURL" />

                <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">quanle</Typography>

                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>

                    </Typography>
                </Box>
            </Box>
            <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
                {navListItems.map((item) => (
                    <NavItem key={item.title} item={item} />
                ))}
            </Stack>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '#ffffff', color: 'black' }}>
                    <IconButton
                        color="inhebrit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
                        <IconButton color="inherit" sx={{ mr: 2 }}>
                            <NotificationsIcon />
                        </IconButton>
                        <Avatar src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqgFqGe2wqjBEPl-RjXeFyhTABoxVgf6RbgJZVVCMqHg&s'} alt="photoURL" />

                    </Box>
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
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
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
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Outlet />



            </Box>
        </Box>
    );
}

AdminDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default AdminDashboard;
