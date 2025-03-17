import React from 'react'
import img1 from "../assets/Images/cabbaige.jpg"
import img2 from "../assets/Images/greenchilli.jpg"
import img3 from "../assets/Images/onion.jpg"
import img4 from "../assets/Images/lemon.jpg"
import img5 from "../assets/Images/drumstick.jpg"
import { useNavigate } from 'react-router-dom';

function ProductCategories() {
    const navigate = useNavigate();

    function handleClick(item) {
        navigate(`/product/${item}`);
    }

    const data = [
        {
            label: "Cabbage",
            image: img1,
        },
        {
            label: "Green Chilly",
            image: img2,
        },
        {
            label: "Onion",
            image: img3,
        },
        {
            label: "Lemon",
            image: img4,
        },
        {
            label: "Drum Stick",
            image: img5,
        },
    ];

    return (
        <div className="product-categories-container" style={{
            margin: '0 auto',
            padding: '10px 80px 80px',
        }}>
            <h2 style={{
                textAlign: "center",
                fontSize: "42px",
                fontWeight: '600',
                margin: '0 0 40px',
                textTransform: 'capitalize',
                borderBottom: '3px solid #e0e0e0',
                paddingBottom: '15px'
            }}>
                Fresh Vegetables
            </h2>

            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                gap: "30px",
                width: "100%"
            }}>
                {data.map((item, index) => {
                    return (
                        <button
                            key={index}
                            onClick={handleClick}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease',
                                padding: '0',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                width: '280px',
                                height: '340px',
                                margin: '10px',
                                position: 'relative'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                height: '100%',
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    overflow: 'hidden',
                                    height: '80%',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={item.image}
                                        alt={item.label}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    />
                                </div>
                                <p style={{
                                    margin: '0',
                                    padding: '20px 0',
                                    fontSize: '18px',
                                    fontWeight: '500',
                                    color: '#333',
                                    textAlign: 'center',
                                    backgroundColor: '#ffffff',
                                    width: '100%'
                                }}>
                                    {item.label}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductCategories;