import React from 'react';
import LetsConnectSection from "../Components/LetsConnectSection";
import Products from "../Components/Products";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";

function Home(props) {
    return (
        <>
            <LetsConnectSection/>
            <WhyChooseUsSection/>
            <Products/>
        </>
    );
}

export default Home;