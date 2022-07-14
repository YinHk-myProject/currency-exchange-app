import React, { useState, useEffect } from "react";
import { Grid, 
    Card,
    Box,
    Typography, 
    Button } from "@mui/material";
import { createUseStyles } from 'react-jss';
import { BsArrowLeftRight } from 'react-icons/bs';
import axios from "axios";
import Data from '../utils/Data';
import DropDown from './DropDown';
import InputBox from "./InputBox";
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
      contentWrapper: {
        width: '80%',
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
      textWrapper: {
        marginTop: 10,
        marginBottom: 20,
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
      }
});

const CurrencyRate = props => {
  const classes = useStyles();
  const [stateObj, setStateObj] = useState({from: null, to: null, amount: null});
  const [optionsList, setOptionList] = useState([]);
  const [responseObj, setResponseObj] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let list = [];
    Data.map(item => list.push({ 
      value: item.currencyCode, 
      label: <div style={{display: 'flex', 'justify-content': 'space-around'}}><img src={item.flagURL} alt="flag.png" style={{marginRight: 50}}/>{item.currencyCode}</div> }) );  
    setOptionList(list);
  }, []);

  const updateValueObj = (type, val) => {
    if(type=="currency_converter_base") 
      setStateObj({...stateObj, from: val});
    else if(type=="currency_converter_target")
      setStateObj({...stateObj, to: val});
    else if(type=="currency_converter_amount") 
      setStateObj({...stateObj, amount: val});
  };

  const url = `https://currency-svc.herokuapp.com/converter?from=${stateObj.from}&to=${stateObj.to}&amount=${stateObj.amount}`;
  
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
    if(stateObj.from!=null && stateObj.to!=null && stateObj.amount!=='' && stateObj.amount!=null ) {
      if(stateObj.from!==stateObj.to) {
        setIsLoading(true);
        apiCall();
      } else window.alert("Please choose different currency");
    } else if(stateObj.from==null || stateObj.to==null || stateObj.amount==='') {
       window.alert("invalid input");
    };
  }


  return (
    <div className={classes.wrapper}>
        <Typography className={classes.typography} gutterBottom variant="h5" component="p">
           Currency Exchange Rate
        </Typography>
      <Grid container space={2} direction="row" justifyContent="center">
        <Grid item xs={12} sx={{margin: 3}}>
           <Card sx={{minHeight:200, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
              <Grid container space={2}>
                <Grid item xs={12} sm={12} md={5}>
                  <label className={classes.label}>
                    <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                      From {stateObj.from!=null? stateObj.from:''}
                    </Typography>
                  </label>
                  <DropDown 
                    className={classes.dropDown}
                    id="currency_converter_base"
                    options={optionsList}
                    updateValueObj={updateValueObj}
                  />
                  <InputBox 
                    className={classes.inputbox} 
                    id="currency_converter_amount" 
                    type="number" 
                    label="Amount" 
                    editMode={true} 
                    maxLength={10} 
                    updateValueObj={updateValueObj}
                  /> 
                </Grid>
                <Grid item xs={12} sm={12} md={2} sx={{display: 'flex', 'justify-content': 'center', alignItems: 'center'}}>
                   <BsArrowLeftRight size='50' color='#183C48' stroke-width='1'/> 
                </Grid> 
                <Grid item xs={12} sm={12} md={5}>
                  <label className={classes.label}>
                    <Typography className={classes.labelText} gutterBottom variant="h6" component="p">
                      To {stateObj.to!=null? stateObj.to:''}
                    </Typography>
                  </label>
                  <DropDown 
                    className={classes.dropDown}
                    id="currency_converter_target"
                    options={optionsList}
                    updateValueObj={updateValueObj}
                  />
                  <Box style={{display: 'flex', 'justify-content': 'center', marginBottom: 25}}>
                    <Button 
                      id='converter'
                      variant="contained" 
                      className={classes.button}
                      sx={{ 'text-transform': 'none', backgroundColor: 'rgba(36, 62, 99, 1)' }}
                      onClick={handleClick}
                    >
                      Convert
                    </Button>
                  </Box>
                </Grid>
              </Grid>
              <Grid container space={2} sx={{display: 'flex', justifyContent: 'center', marginTop: 5, marginBottom: 8}}>
                <Grid item xs={12}>
                  <Spinner isLoading={isLoading} size={38} />
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                  {(responseObj && !isLoading)? (responseObj.status="success"?
                    <div className={classes.contentWrapper}>
                      <div className={classes.textWrapper}>
                        <Typography gutterBottom variant="h5" component="p" sx={{marginRight: 3, color: 'rgb(8, 60, 115)', fontWeight: 800}}>{Math.round(responseObj.amount * 100) / 100}</Typography>
                        <Typography gutterBottom variant="h5" component="p" sx={{color: '#00192e'}}> {responseObj.base_currency_name} =</Typography>
                      </div>
                      <div className={classes.textWrapper} style={{marginLeft: 50}}>
                        <Typography gutterBottom variant="h6" component="p" sx={{marginRight: 3, color: 'rgba(36, 62, 99, 1)', fontWeight: 600}}>{responseObj.rates.rateInfo[0].rate_for_amount}</Typography>
                        <Typography gutterBottom variant="h6" component="p">{responseObj.rates.rateInfo[0].currency_name}</Typography>
                      </div>
                      <div className={classes.textWrapper} style={{marginLeft: 50}}>
                        <Typography gutterBottom variant="body" component="p" sx={{marginRight: 1}}>1 {responseObj.base_currency_name} =</Typography>
                        <Typography gutterBottom variant="body" component="p" sx={{marginRight: 1}}>{responseObj.rates.rateInfo[0].rate}</Typography>
                        <Typography gutterBottom variant="body" component="p">{responseObj.rates.rateInfo[0].currency_name}</Typography>
                      </div>
                      <div className={classes.textWrapper} style={{marginLeft: 50}}>
                        <Typography gutterBottom variant="body" component="p" sx={{marginRight: 1}}>Updated date:</Typography>
                        <Typography gutterBottom variant="body">{responseObj.updated_date}</Typography>
                      </div>
                    </div>:<Typography gutterBottom variant="h5" component="p" sx={{marginRight: 3}}>Oops, Something Went Wrong!</Typography>):null}
                </Grid>
              </Grid>
           </Card>
        </Grid>
      </Grid>
    </div> 
  );
};

export default CurrencyRate;