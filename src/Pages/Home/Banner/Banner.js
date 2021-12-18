import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { HashLink } from 'react-router-hash-link';


const Banner = () => {
    return (
        <Box sx={{
            flexGrow: 1, p: 5, backgroundImage: { xs: 'url(https://i.ibb.co/cJV02f2/image.png)', md: 'url(https://i.ibb.co/C2nWz1m/image.png)' },
            backgroundSize: 'cover',
            height: 450
        }}
            style={{


            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '100%' }}>
                <Box style={{ textAlign: 'center' }}>
                    <Typography variant="h2" component="div"
                        sx={{ fontFamily: 'Tangerine' }}
                    >
                        Exclusive Spa and Salon Services  For You
                    </Typography>

                    <HashLink
                        to='/home#services'
                        style={{ textDecoration: 'none' }}
                    >
                        <Button variant="contained" color="warning">
                            Book Appointment
                        </Button>
                    </HashLink>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;