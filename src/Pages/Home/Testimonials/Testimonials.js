import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SimpleSlider from '../SimpleSlider/SimpleSlider';

const Testimonials = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom component="div"
                >
                    Testimonials
                </Typography>
            </Box>
            <SimpleSlider />
        </Container>
    );
};

export default Testimonials;