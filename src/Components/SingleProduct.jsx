import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Box, Container, Grid, IconButton, Paper } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SingleProduct = ({ productData }) => {
  // const product = productData || {
  //   title: "Product Name",
  //   description: "Product description would appear here when loaded from the API.",
  //   countryOfOrigin: "Origin Country",
  //   shelfLife: "Shelf life information",
  //   packingType: "Packing information",
  //   images: [
  //     "https://via.placeholder.com/800x600",
  //     "https://via.placeholder.com/800x600",
  //     "https://via.placeholder.com/800x600"
  //   ],
  // };

  const [product, setProduct] = useState()
  const params = useParams()
  console.log(params)


   useEffect(()=>{
          axios.get(`https://67d84aa200348dd3e2a6f5f5.mockapi.io/api/v1/products`)
          .then((res)=>
              
              setProduct(res.data[0])
          )
          .catch((err)=>console.log(err))
      
      }, [])
      console.log(product)


  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
      <Box sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        py: 6
      }}>
        <Container maxWidth="lg">
          <Paper elevation={0} sx={{
            borderRadius: 3,
            overflow: "hidden",
            backgroundColor: "white",
            mb: 4
          }}>
            <Grid container spacing={0}>
              {/* Left Side - Image Slider */}
              <Grid item xs={12} md={6} sx={{ position: "relative" }}>
                <Box sx={{
                  position: "relative",
                  height: { xs: 400, md: 550 },
                  overflow: "hidden",
                  borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' }
                }}>
                  {product.images && product.images.length > 0 ? (
                      <>
                        <Slider ref={sliderRef} {...settings}>
                          {product.images.map((image, index) => (
                              <Box key={index} sx={{ position: "relative", height: { xs: 400, md: 550 } }}>
                                <Box
                                    component="img"
                                    src={image}
                                    alt={`${product.name} image ${index + 1}`}
                                    sx={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                      objectPosition: "center",
                                    }}
                                />
                              </Box>
                          ))}
                        </Slider>
                        <IconButton
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: 16,
                              transform: "translateY(-50%)",
                              bgcolor: "rgba(255,255,255,0.8)",
                              boxShadow: 2,
                              '&:hover': {
                                bgcolor: "rgba(255,255,255,0.9)",
                              },
                              zIndex: 2,
                              width: 40,
                              height: 40
                            }}
                            onClick={() => sliderRef.current?.slickPrev()}
                        >
                          <ArrowBackIos sx={{ fontSize: 18, ml: 1 }} />
                        </IconButton>
                        <IconButton
                            sx={{
                              position: "absolute",
                              top: "50%",
                              right: 16,
                              transform: "translateY(-50%)",
                              bgcolor: "rgba(255,255,255,0.8)",
                              boxShadow: 2,
                              '&:hover': {
                                bgcolor: "rgba(255,255,255,0.9)",
                              },
                              zIndex: 2,
                              width: 40,
                              height: 40
                            }}
                            onClick={() => sliderRef.current?.slickNext()}
                        >
                          <ArrowForwardIos sx={{ fontSize: 18 }} />
                        </IconButton>
                      </>
                  ) : (
                      <Box
                          sx={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "#f5f5f5",
                          }}
                      >
                        <Typography variant="body1" color="text.secondary">
                          No images available
                        </Typography>
                      </Box>
                  )}
                </Box>
              </Grid>

              {/* Right Side - Product Information */}
              <Grid item xs={12} md={6}>
                <Box sx={{
                  p: { xs: 3, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}>
                  <Typography
                      variant="h4"
                      component="h1"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "#2c3e50",
                        fontSize: { xs: '1.75rem', md: '2.25rem' }
                      }}
                  >
                    {product.name}
                  </Typography>

                  <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        color: "#596366",
                        lineHeight: 1.8,
                        fontSize: { xs: '0.95rem', md: '1rem' }
                      }}
                  >
                    {product.description}
                  </Typography>

                  <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "#2c3e50",
                        fontSize: { xs: '1.1rem', md: '1.2rem' }
                      }}
                  >
                    Product Specifications:
                  </Typography>

                  <Box
                      sx={{
                        mb: 2,
                        p: 2.5,
                        bgcolor: "#f8f9fa",
                        borderRadius: 2,
                        border: "1px solid #e9ecef"
                      }}
                  >
                    {product.countryOfOrigin && (
                        <Box sx={{
                          display: "flex",
                          mb: 1.5,
                          alignItems: "flex-start",
                          gap: 1
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#4a5568", minWidth: 130 }}>
                            Country of Origin:
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#596366" }}>
                            {product.countryOfOrigin}
                          </Typography>
                        </Box>
                    )}
                    {product.shelfLife && (
                        <Box sx={{
                          display: "flex",
                          mb: 1.5,
                          alignItems: "flex-start",
                          gap: 1
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#4a5568", minWidth: 130 }}>
                            Shelf Life:
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#596366" }}>
                            {product.shelfLife}
                          </Typography>
                        </Box>
                    )}
                    {product.packingType && (
                        <Box sx={{
                          display: "flex",
                          mb: 1.5,
                          alignItems: "flex-start",
                          gap: 1
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#4a5568", minWidth: 130 }}>
                            Packing Type:
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#596366" }}>
                            {product.packingType}
                          </Typography>
                        </Box>
                    )}
                    {product.preferredBuyerLocation && (
                        <Box sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1
                        }}>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#4a5568", minWidth: 130 }}>
                            Preferred Location:
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#596366" }}>
                            {product.preferredBuyerLocation}
                          </Typography>
                        </Box>
                    )}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
  );
};