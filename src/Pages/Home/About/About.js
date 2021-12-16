import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

const About = () => {
    return (
        <Container id='about' sx={{ mt: 5, pt: 8 }}>
            <Grid container columns={{ xs: 6, md: 6 }} sx={{ alignItems: 'center' }}>
                <Grid item xs={6} md={3}>
                    <img style={{ width: '100%', borderRadius: 30 }} src="https://image3.jdomni.in/banner/19102021/B3/63/BA/A253E63A4C61C13B4A9D3BB7B3_1634657593387.jpg" alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h2" component="div"
                            sx={{ fontFamily: 'Tangerine' }}
                        >
                            About us
                        </Typography>
                        <Typography component="p"
                        >
                            We Bloom Spa and Saloons, situated at Malad West, Mumbai, Maharashtra offer a variety of body spas and salon treatments where we cater to the outer well being of an individual which is as important as a calm inner state. Our salon and spa consists of a wonderful, highly trained and friendly staff waiting to pamper you as you visit for any one or more of our fabulous services to enrich your senses and de-stress your mind, body and soul.

                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default About;