import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://67d84aa200348dd3e2a6f5f5.mockapi.io/api/v1/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);

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
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            overflow: "hidden",
            backgroundColor: "white",
            mb: 4,
          }}
        >
          <Grid container spacing={0}>
            {/* Left Side - Image Slider */}
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "relative",
                  height: { xs: 400, md: 550 },
                  overflow: "hidden",
                  borderRadius: { xs: "16px 16px 0 0", md: "16px 0 0 16px" },
                }}
              >
                {product.images && product.images.length > 0 ? (
                  <>
                    <Slider ref={sliderRef} {...settings}>
                      {product.images.map((image, index) => (
                        <Box
                          key={index}
                          sx={{
                            position: "relative",
                            height: { xs: 400, md: 550 },
                          }}
                        >
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
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.9)",
                        },
                        zIndex: 2,
                        width: 40,
                        height: 40,
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
                        "&:hover": {
                          bgcolor: "rgba(255,255,255,0.9)",
                        },
                        zIndex: 2,
                        width: 40,
                        height: 40,
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
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#2c3e50",
                    fontSize: { xs: "1.75rem", md: "2.25rem" },
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
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {product.description}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};
