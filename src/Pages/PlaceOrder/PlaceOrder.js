import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Grid, Rating, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [service, setService] = useState({});
    const { teamId } = useParams();
    const { user, databaseUrl } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${databaseUrl}/services/${teamId}`)
            .then(res => {
                setService(res.data);
            })
    }, [teamId]);

    const { serviceTitle, price, rating, image, description } = service;


    const onSubmit = data => {
        const status = 'pending';
        const newData = { status, ...data }
        axios.post(`${databaseUrl}/appointments`, newData)
            .then(res => {
                if (res.data.acknowledged) {
                    alert('Appointment Added Successfully!');
                    navigate('/home#services')
                }
            })
    };

    return (
        <div>
            <Navigation />
            <Container sx={{ my: 5 }}>
                <Grid container columns={{ xs: 6, md: 6 }} sx={{ alignItems: 'center' }}>
                    <Grid item xs={6} md={3}>
                        <Box sx={{ width: { xs: '100%', md: '70%' }, mx: 'auto' }}>
                            <img style={{ width: '100%', borderRadius: 10 }} src={image} alt={serviceTitle} />
                        </Box>
                        <Typography variant="h5" component="div"
                        >
                            {serviceTitle}
                        </Typography>
                        <Typography variant="h6" component="div"
                        >
                            Price: ${price}
                        </Typography>
                        <Rating name="read-only" value={parseInt(rating)} readOnly />
                        <Typography component="p"
                        >
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {user.displayName && <Box sx={{ p: { xs: 0, md: 10 } }}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField
                                    fullWidth
                                    label="Service Name"
                                    id="name"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    defaultValue={serviceTitle}
                                    {...register("service", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    label="Name"
                                    id="name"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    defaultValue={user.displayName}
                                    {...register("userName", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    label="Email ID"
                                    id="email"
                                    variant="standard"
                                    defaultValue={user.email}
                                    sx={{ mb: 2 }}
                                    {...register("email", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    label="Mobile"
                                    id="mobile"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    {...register("phn", { required: true })}
                                />
                                <TextField
                                    fullWidth
                                    id="date"
                                    variant="standard"
                                    type='datetime-local'
                                    sx={{ mb: 3 }}
                                    {...register("date", { required: true })}
                                />
                                <Button
                                    fullWidth variant="contained" color="warning"
                                    type='submit'
                                >
                                    book appoinment
                                </Button>
                            </form>
                        </Box>}
                    </Grid>
                </Grid>

            </Container>
            <Footer />
        </div>
    );
};

export default PlaceOrder;