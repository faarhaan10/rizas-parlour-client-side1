import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';


const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}
            style={{
                backgroundImage: 'url(https://image1.jdomni.in/banner/19102021/77/0B/2D/C11C3702DE43A8BC8FD6A3F8DA_1634652457498.png)',
                backgroundSize: 'cover',
                height: 450

            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '100%' }}>
                <Box style={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom component="div"

                    >
                        Exclusive Spa and Salon Services  For You
                    </Typography>
                    <br />
                    <Button variant="contained" color="warning">
                        Book Appointment
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;