import React from "react";
//import NavBar from './component/NavBar';
import Carousel from './component/Carousel';
import { createUseStyles } from 'react-jss';
import { Button } from "@mui/material";
import carouselList from './component/carouselList';
import CurrencyRate from './component/currencyRate';
import HistoricalRate from './component/historicalRate';
import ExchangeRates from './component/exchangeRates';
import PastExchangeRates from './component/pastExchangeRates';
//import FooterSection from './component/FooterSection';

const useStyles = createUseStyles({
    wrapper: {
        width: 'inherit',
        height: 'inherit'
    },
    buttonWrapper: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center'
    },
    sectionWrapper: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Main = () => {
    const classes = useStyles();

    const scrollToConverter = () => {
        const anchor =  document.getElementById('converter');
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
      <div className={classes.wrapper}>
       {/* <NavBar /> */}
       <div className={classes.buttonWrapper}>
        <Button 
            variant="contained" 
            sx={{ borderRadius: 25, 'text-transform': 'none', backgroundColor: 'rgba(36, 62, 99, 1)'}}
            onClick={scrollToConverter}
        >
           Check Currency Rate
        </Button>
       </div>
       <div className={classes.sectionWrapper}>
        <Carousel slide={carouselList}/>
       </div>
       <div className={classes.sectionWrapper}>
        <CurrencyRate />
       </div>
       <div className={classes.sectionWrapper}>
        <HistoricalRate />
       </div>
       <div className={classes.sectionWrapper}>
        <ExchangeRates />
       </div>
       <div className={classes.sectionWrapper}>
        <PastExchangeRates />
       </div>
      </div>
    );
}

export default Main;
