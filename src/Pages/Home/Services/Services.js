import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import Service from '../Service/Service';
import useFirebase from '../../../hooks/useFirebase';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);
    const { databaseUrl } = useFirebase();

    useEffect(() => {
        axios.get(`${databaseUrl}/services`)
            .then(res => {
                setServices(res.data);
            })
    }, []);


    return (
        <Container id='services' sx={{ mt: 5, pt: 8 }}>
            <Box sx={{ textAlign: 'center', my: 3 }}>
                <Typography variant="h2" component="div"
                    sx={{ fontFamily: 'Tangerine' }}
                >
                    Services
                </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', my: 3 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => (
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>
                        ))
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default Services;
//https://image3.jdomni.in/banner/19102021/10/0D/9F/E5ED203CA6FB202DD7C32D2830_1634653616855.jpg