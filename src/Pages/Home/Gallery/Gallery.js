import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Gallery = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div"
                    sx={{ fontFamily: 'Tangerine' }}
                >
                    Gallery
                </Typography>
            </Box>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ alignItems: 'center' }}>

                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={4} sm={4} md={4}>
                        <img style={{ width: '100%' }} src="https://image3.jdomni.in/banner/19102021/6D/6D/D9/497B365D4AD8EC939F93FD2A39_1634654192709.jpg" alt="" />
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
};

export default Gallery;