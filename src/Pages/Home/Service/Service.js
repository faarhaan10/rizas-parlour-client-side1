import React from 'react';
import { Typography, Box, Grid, Button, Rating } from '@mui/material';
import './Service.css';

const Service = ({ service }) => {
    const { serviceTitle, rating, image, description } = service;


    return (
        <Grid item xs={4} sm={4} md={3}>
            <Box className='service-card' sx={{ py: 2, borderRadius: 8 }}>
                <Box sx={{ width: 248, height: 248, mx: 'auto' }}>
                    <img style={{ width: '100%', borderRadius: 25 }} src={image} alt={serviceTitle} />
                </Box>
                <Typography variant="h6" component="div"
                >
                    {serviceTitle}
                </Typography>
                <Rating name="read-only" value={parseInt(rating)} readOnly />
                <Typography component="p"
                >
                    {description.slice(0, 80)}...
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