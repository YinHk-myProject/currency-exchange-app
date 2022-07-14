import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from "@mui/material";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles ({
    wrapper: {
      width: '100%'
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    menuButtonText: {
      color: 'rgba(36, 62, 99, 1)',
      fontWeight: 'bold',
      textTransform: 'none'
    },
    brandText: {
      paddingLeft: 15
      //fontFamily: //theme.title.titleFontFamily,
      //fontWeight: "fontWeightBold" //float: 'right'
    }
});


const TypographyList = classes => 
  <div>
    <CurrencyExchangeIcon  sx={{ fontSize: 35 }}/>
    <Typography
      variant="h4"
      className={classes.brandText}
      fontWeight="fontWeightBold"
      display="inline"
      color="#FFFFFF"
    >
      Currency Converter
    </Typography>
  </div>;


const NavBar = props => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const classes = useStyles();
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className={classes.wrapper}>
        <AppBar position="fixed" style={{backgroundColor: scrollPosition>=100? 'rgba(48, 48, 48, .7)':'rgba(48, 48, 48, 1)'}}>
            <Toolbar className={classes.toolbar}>
              {TypographyList(classes)}
            </Toolbar>
        </AppBar>
      </div>  
    );
};
  
export default NavBar;