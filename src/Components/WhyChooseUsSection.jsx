import React from 'react';
import img1 from "../assets/Images/bestquality.jpg";
import img2 from "../assets/Images/ontime.jpg";
import img3 from "../assets/Images/bestPrice.jpg";
import img4 from "../assets/Images/packaging.jpg";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, useMediaQuery, useTheme } from '@mui/material';

function WhyChooseUsSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const data = [
        {
            title: 'Quality Products',
            image: img1,
            description: 'We ensure all our products meet the highest international standards.'
        },
        {
            title: 'Timely Shipment',
            image: img2,
            description: 'We guarantee on-time delivery with efficient logistics management.'
        },
        {
            title: 'Best Pricing',
            image: img3,
            description: 'Competitive prices without compromising on quality or service.'
        },
        {
            title: 'Premium Packaging',
            image: img4,
            description: 'Secure and attractive packaging that protects your products during transit.'
        },
    ];

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: '#f8f9fa',
            width: '100%'
        }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                            fontWeight: 700,
                            mb: 2,
                            color: '#2c3e50',
                            position: 'relative',
                            display: 'inline-block',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: -10,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '80px',
                                height: '4px',
                                backgroundColor: '#3498db',
                                borderRadius: '2px'
                            }
                        }}
                    >
                        Why Choose Us?
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            maxWidth: '700px',
                            mx: 'auto',
                            mt: 4,
                            color: '#596366',
                            fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                    >
                        We pride ourselves on delivering exceptional service and products to our global partners.
                        Here's what sets us apart from the competition:
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                elevation={2}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative', pt: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center', py: 3 }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h3"
                                        sx={{
                                            fontWeight: 600,
                                            color: '#2c3e50',
                                            mb: 2
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            lineHeight: 1.6,
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default WhyChooseUsSection;