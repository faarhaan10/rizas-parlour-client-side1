import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import './Service.css';

const Service = () => {


    return (
        <Grid item xs={4} sm={4} md={3}>
            <Box className='service-card' sx={{ py: 2, borderRadius: 8 }}>
                <Box sx={{ width: 248, height: 248, mx: 'auto' }}>
                    <img style={{ width: '100%', borderRadius: 25 }} src='https://image3.jdomni.in/banner/19102021/10/0D/9F/E5ED203CA6FB202DD7C32D2830_1634653616855.jpg' alt='' />
                </Box>
                <Typography variant="h6" component="div"
                >
                    Skin Services
                </Typography>
                <Typography component="p"
                >
                    A bespoke selection of products, aroma therapeutic oils and techniques to meet your skincare requirements.
                </Typography>
                <Button
                    variant="contained" color="warning"
                >
                    Enquire Now
                </Button>
            </Box>
        </Grid>
    );
};

export default Service;