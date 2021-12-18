import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const Gallery = () => {
    const images = ['https://image1.jdomni.in/banner/19102021/46/90/EB/96859A46951D13C7E701AF1496_1634654156375.jpg', 'https://image2.jdomni.in/banner/19102021/36/B7/02/768BCC6399397AA0BEBB4F170A_1634654178372.jpg', 'https://image3.jdomni.in/banner/19102021/6D/6D/D9/497B365D4AD8EC939F93FD2A39_1634654192709.jpg'];


    return (
        <Container id='gallery' sx={{ mt: 5, pt: 8 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" component="div"
                    sx={{ fontFamily: 'Tangerine' }}
                >
                    Gallery
                </Typography>
            </Box>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ alignItems: 'center' }}>

                {images.map(pic => (
                    <Grid key={pic} item xs={4} sm={4} md={4} sx={{ textAlign: 'center', mb: 2 }}>
                        <img style={{ width: '90%', borderRadius: 20 }} src={pic} alt="" />
                    </Grid>
                ))}
            </Grid>

        </Container>
    );
};

export default Gallery;