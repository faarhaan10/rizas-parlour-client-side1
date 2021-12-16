import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

const Testimonials = () => {
    return (
        <Container id='testimonials' sx={{ mt: 5, pt: 8 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div"
                    sx={{ fontFamily: 'Tangerine', pb: 3 }}
                >
                    Testimonials
                </Typography>
            </Box>
            <SimpleSlider />
        </Container>
    );
};

export default Testimonials;