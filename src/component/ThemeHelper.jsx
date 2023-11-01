import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Navbar from './Navbar';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}

const theme = createTheme();

export default function ThemeHelper() {
  return (
    <ThemeProvider theme={theme}>
      <App />
      <Navbar/>
      <Home/>
      <AboutUs />
      <ContactUs/> 
   
    <ParallaxCarousel/>
      <Insurance/>
      <WhyUs />
      <TamSquad/>
      <Faq/>
      <Career/>
      <UsedCar/>
      <EmiCalculator/>
      <SaleCar/>
      <CompareCars/>
      <BuyingCar/>
      <FinanceCar/>
      {/* {/* <MultipleSelectPlaceholder/> */}
    </ThemeProvider>
  );
}
