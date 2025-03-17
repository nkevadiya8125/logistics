import React, { useState } from 'react';
import { Box, Container, AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = ['Home', 'Products', 'About', 'Contacts'];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2 }}>
                <img
                    src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=382,fit=crop,q=95/ALpJx4OJLjfkLZeZ/whatsapp_image_2024-05-30_at_15.06.15_d83e7b40-removebg-preview-m5Kv61JM8lfjePl1.png'
                    alt="Logo"
                    width={150}
                />
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item} sx={{ justifyContent: 'center' }}>
                        <ListItemText
                            primary={item}
                            primaryTypographyProps={{
                                fontSize: 16,
                                fontWeight: 500,
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" color="default" elevation={1} sx={{ backgroundColor: 'white' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ py: 1 }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        <img
                            src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=382,fit=crop,q=95/ALpJx4OJLjfkLZeZ/whatsapp_image_2024-05-30_at_15.06.15_d83e7b40-removebg-preview-m5Kv61JM8lfjePl1.png'
                            alt="Logo"
                            width={isMobile ? 150 : 180}
                            style={{ display: 'block' }}
                        />
                    </Box>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: '#333' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item}
                                    sx={{
                                        color: '#333',
                                        fontWeight: 500,
                                        fontSize: '1.2rem',
                                        textTransform: 'none',
                                        position: 'relative',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#0066cc',
                                            '&::after': {
                                                width: '70%',
                                            }
                                        },
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: '6px',
                                            left: '15%',
                                            width: '0',
                                            height: '2px',
                                            backgroundColor: '#0066cc',
                                            transition: 'width 0.3s ease'
                                        }
                                    }}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better mobile performance
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;