import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Testimonials = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom component="div"
                >
                    Testimonials
                </Typography>
            </Box>

        </Container>
    );
};

export default Testimonials;