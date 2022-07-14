import React, { useState, useEffect, Fragment } from "react";
import { Grid, Card, Box, Typography, Button, Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { createUseStyles } from 'react-jss';
import axios from "axios";
import Data from '../utils/Data';
import DropDown from './DropDown';
import DateInputBox from "./DateInputBox";
import Spinner from "./spinner";

const useStyles = createUseStyles({
    wrapper: {
      //borderStyle: 'dashed',
      width: '100%',
      height: '100%',
      marginTop: 50,
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 10
    },
    typography: {
      color: '#000000',
      display: 'flex', 
      justifyContent: 'center',
      //fontWeight: theme.title.titleFontWeight, 
      //fontFamily: theme.title.titleFontFamily
    },
    label: {
      display: 'flex',
      'justify-content': 'center'
    },
    labelText: {
      color: '#0260a8',
      //fontWeight: theme.title.titleFontWeight,
      //fontFamily: theme.title.titleFontFamily,
      marginTop: 15
    },
    dropDown: {
      width: '100%',
      marginBottom: 25
    },
    image: {
      width: 60
    },
    inputbox: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      'justify-content': 'center',
      alignItems: 'center',
      marginBottom: 15
    },
    button: {
      width: '60%'
    },
    dateWrapper: {
        display: 'flex', 
        flexDirection: 'column', 
        'justify-content': 'center', 
        alignItems: 'center', 
        width: '100%'  
    }
});


const PastExchangeRates = props => {
    const classes = useStyles();
    const [stateObj, setStateObj] = useState({ base: null, date: null });
    const [optionsList, setOptionList] = useState([]); 
    const [responseObj, setResponseObj] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);

    const updateValueObj = (type, val) => {
        if(type=="latest_rate_base_currency") 
          setStateObj({...stateObj, base: val});
        else if(type=="historical_rate_date_picker") {
          setStateObj({...stateObj, date: val});
        }
    };
    
    useEffect(() => {
        let list = [];
        Data.map(item => list.push({ 
          value: item.currencyCode, 
          label: <div style={{display: 'flex', 'justify-content': 'space-around'}}><img src={item.flagURL} alt="flag.png" style={{marginRight: 50}}/>{item.currencyCode}</div> }) );  
        setOptionList(list);
    }, []);
    
    const url = `https://currency-svc.herokuapp.com/historical_rates/${stateObj.date}?base=${stateObj.base}`;
    
    async function apiCall() { 
      try {
        let res = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
          },
        });
        const data = await res.data;
        console.log(data);
        if(data) { 
          setResponseObj(data);
          setIsLoading(false);
        }
      } catch (error) {
         console.log(error);
      } 
    };
    
    const handleClick = () => {
      if(stateObj.base!=null) {
        setIsLoading(true);
        apiCall();
      } else if(stateObj.base==null) {
        window.alert("invalid input");
      };
    };


    const currencyRate = rate => {
      let list = [];
      for(const [key, value] of Object.entries(rate)) {
        list.push(
          <TableRow>
            <TableCell 
              component="td" 
              scope="column" 
              className={classes.tableCell}
            >{key}</TableCell>
            <TableCell className={classes.tableCell}>{value}</TableCell>
          </TableRow>
        );
      };
      return list;
    };


    return (
        <div className={classes.wrapper}>
            <Typography className={classes.typography} gutterBottom variant="h5" component="p">
                Past Exchange rates
            </Typography>
          <Grid container space={2} direction="row" justifyContent="center">
              <Grid item xs={12} sx={{margin: 3}}>
                 <Card sx={{minHeight:200, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Grid container space={2}>
                      <Grid item xs={12} sm={12} md={6}>
                        <label className={classes.label}>
                          <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                            Base Currency {stateObj.base!=null? stateObj.base:''}
                          </Typography>
                        </label>
                        <DropDown 
                          className={classes.dropDown}
                          id="latest_rate_base_currency"
                          options={optionsList}
                          updateValueObj={updateValueObj}
                        />
                        
                      </Grid> 
                      <Grid item xs={12} sm={12} md={6}>
                       <div className={classes.dateWrapper}>
                        <DateInputBox 
                            className={classes.dateInput}
                            id="historical_rate_date_picker"
                            format="MM-DD-YYYY"
                            maxLength={10}
                            updateValueObj={updateValueObj}
                        />
                       </div>
                        <Box style={{display: 'flex', 'justify-content': 'center', marginTop: 10, marginBottom: 10 }}>
                          <Button 
                                variant="contained" 
                                className={classes.button}
                                sx={{ 'text-transform': 'none', backgroundColor: 'rgba(36, 62, 99, 1)' }} 
                                onClick={handleClick}
                            >
                              Get
                            </Button>
                        </Box>
                      </Grid>
                    </Grid>
                    <Grid container space={2} sx={{display: 'flex', justifyContent: 'center', marginTop: 5, marginBottom: 8}}>
                      <Grid item xs={12}>
                       <Spinner isLoading={isLoading} size={38} />
                      </Grid>
                      <Grid item xs={12}>
                        {responseObj? (responseObj.success===true?
                          <Fragment>
                            <Typography gutterBottom variant="h4" component="p" sx={{marginButton: 10, marginLeft: 2}}> 1 {responseObj.base} =</Typography>
                            <TableContainer>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell className={classes.head} sx={{fontWeight: 800}}>Currency</TableCell>
                                    <TableCell className={classes.head} sx={{fontWeight: 800}}>Rate</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {currencyRate(responseObj.rates.currencyRate)}
                                </TableBody>
                              </Table>
                            </TableContainer></Fragment>:<Typography gutterBottom variant="h3" component="p" sx={{marginRight: 3}}>Oops, Something Went Wrong!</Typography>):null} 
                      </Grid>
                    </Grid>
                 </Card>
              </Grid>
          </Grid>
        </div>
      );
}

export default PastExchangeRates;