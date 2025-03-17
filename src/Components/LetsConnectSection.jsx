import React from 'react';
import { Box, Typography, Button, Container, Fade } from '@mui/material';
import { Email as EmailIcon } from '@mui/icons-material';
import backgroundImage from "../assets/Images/bgimg.jpg";

function LetsConnectSection() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    zIndex: 1
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)',
                    zIndex: 2
                }
            }}
        >
            <Container maxWidth="lg">
                <Fade in={true} timeout={1000}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh',
                            color: 'white',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 3,
                            padding: { xs: '0 16px', md: 0 }
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h1"
                                component="h1"
                                sx={{
                                    fontSize: { xs: '2.75rem', sm: '3.75rem', md: '5rem' },
                                    fontWeight: 800,
                                    marginBottom: '16px',
                                    textShadow: '2px 4px 8px rgba(0,0,0,0.4)',
                                    lineHeight: 1,
                                    letterSpacing: '-0.02em'
                                }}
                            >
                                Navigating Global Trade
                            </Typography>
                        </Box>

                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '3rem' },
                                fontWeight: 600,
                                marginBottom: '28px',
                                textShadow: '2px 3px 4px rgba(0,0,0,0.4)',
                                lineHeight: 1.2,
                                letterSpacing: '0.02em',
                                position: 'relative',
                                display: 'inline-block',
                                pb: 2,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: { xs: '80px', md: '120px' },
                                    height: '2px',
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)'
                                }
                            }}
                        >
                            Your Trusted Export Partner
                        </Typography>

                        <Typography
                            variant="h6"
                            component="p"
                            sx={{
                                fontSize: { xs: '1.25rem', md: '1.5rem' },
                                fontWeight: 400,
                                marginBottom: '40px',
                                opacity: 0.95,
                                maxWidth: '650px',
                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                lineHeight: 1.6,
                                letterSpacing: '0.01em'
                            }}
                        >
                            Let's Connect Together and Expand Your Global Reach
                        </Typography>

                        <Box sx={{ mt: 2, position: 'relative' }}>
                            <Button
                                variant="contained"
                                startIcon={<EmailIcon sx={{ fontSize: { xs: '20px', md: '24px' } }} />}
                                sx={{
                                    backgroundColor: '#ffffff',
                                    color: '#222222',
                                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    fontWeight: 600,
                                    padding: { xs: '14px 30px', md: '16px 36px' },
                                    borderRadius: '50px',
                                    textTransform: 'none',
                                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent',
                                    position: 'relative',
                                    zIndex: 1,
                                    overflow: 'hidden',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
                                        zIndex: -1,
                                        transition: 'all 0.4s ease'
                                    },
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                                        '&::before': {
                                            transform: 'scaleX(1.1) scaleY(1.3)',
                                            opacity: 0
                                        }
                                    },
                                    '&:active': {
                                        transform: 'translateY(-1px)',
                                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                                    }
                                }}
                            >
                                Mail Us
                            </Button>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -15,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '60%',
                                    height: '10px',
                                    opacity: 0.5,
                                    filter: 'blur(8px)',
                                    backgroundColor: '#ffffff',
                                    borderRadius: '50%'
                                }}
                            />
                        </Box>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
}

export default LetsConnectSection;