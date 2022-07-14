import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCube, Pagination } from 'swiper';
import { createUseStyles } from 'react-jss';
import  useWindowSize from '../utils/useWindowSize';
import { Card, 
         CardContent,  
         Typography, 
         Avatar,
         List, 
         ListItem,
         ListItemText,
         ListItemAvatar } from "@mui/material";

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
//import { EffectCube, Pagination } from "swiper";


const useStyles = createUseStyles({
  wrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  cardWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  cardContent: {
    width: '100%',
    minHeight: 200
  },

});


const Carousel = props => {
  const { slide } = props;
  const classes = useStyles();
  const size = useWindowSize(); 
  const [slideNum, setSlideNum] = useState(3);
  SwiperCore.use([Autoplay]);

  const changeSlides = size => {
    if(size.width>=1080) {
      setSlideNum(3);
    } else if(size.width<1080 && size.width>=700) {
      setSlideNum(2);
    } else setSlideNum(1);
  };

  useEffect(() => {
    size && changeSlides(size);
  }, [size]);

  return (
    <div className={classes.wrapper}>
      <Swiper 
        loop={true}
        autoplay={{
              delay: 3000,
              disableOnInteraction: false
        }}
        spaceBetween={40}
        slidesPerView={slideNum}
        effect={"cube"}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="mySwiper"
      >
        {slide.map(item => 
          <SwiperSlide>
            <Card className={classes.cardWrapper} sx={{ width: '100%', backgroundColor: '#1f2021'/*'#1b3661'*/ }}>
              <CardContent className={classes.cardContent}>
                {item.map(element => 
                    <List sx={{ width: '100%', bgcolor: 'rgba(48, 48, 48, .8)'/*'#fcfcfc'*/ }}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <img src={element.flagURL} alt='flag'/>
                        </ListItemAvatar>
                        <ListItemText 
                            primary={ 
                              <Typography
                                  component="p"
                                  variant="body2"
                                  color='#ffffff'//"text.primary"
                              >
                                {element.currencyCode}
                              </Typography>} 
                            secondary={
                              <Typography
                                  component="p"
                                  variant="body2"
                                  color='#ffffff'//"text.primary"
                              >
                                {element.currencyName}
                              </Typography>} />
                      </ListItem>  
                    </List>)}     
              </CardContent>
            </Card>
          </SwiperSlide>)}
      </Swiper>
    </div>
  )
};

export default Carousel;