import { Button, Container, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Footer = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, py: 5, backgroundColor: '#ff943c' }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                            <Typography variant="h2" component="div"
                                sx={{ fontFamily: 'Tangerine' }}
                            >
                                Riza's Parlour
                            </Typography>
                            <Typography variant="body1" gutterBottom sx={{ mb: 5, fontFamily: 'Tangerine' }}>FEEL FRESH, LOOK BEAUTY
                            </Typography>
                            <Button color="secondary">@_rizasparlour</Button>
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={{ xs: 1, md: 4 }} columns={{ xs: 4, md: 12 }}>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500' }}>
                                        About
                                    </Typography>
                                    <Button color="secondary">Terms of Service</Button>
                                    <Button color="secondary">Terms and Condition</Button>
                                </Grid>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500' }}>
                                        Information
                                    </Typography>
                                    <Button color="secondary" display="block">About us          </Button>
                                    <Button color="secondary">          Contact us</Button>
                                    <Button color="secondary">Privacy Policy</Button>
                                    <Button color="secondary">Appointment Details</Button>
                                </Grid>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500' }}>
                                        Support
                                    </Typography>
                                    <Button color="secondary" display="block">News</Button>
                                    <Button color="secondary">Contact</Button>
                                    <Button color="secondary">Mail Support</Button>
                                    <Button color="secondary">Chat Support</Button>
                                </Grid>
                                <Grid item xs={4} md={3} >
                                    <Typography variant="button" display="block" gutterBottom sx={{ mb: 3, fontWeight: '500' }}>
                                        Help
                                    </Typography>
                                    <Button color="secondary" display="block">FAQ         </Button>
                                    <Button color="secondary">Catalog</Button>
                                    <Button color="secondary">Search</Button>
                                    <Button color="secondary">Wishlist</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography variant="overline" display="block" gutterBottom>
                        ?? 2021 R.Parlour. A Programming Hero Initiative
                    </Typography>
                    <img style={{ xs: { width: '100%' } }} src="https://i.ibb.co/4dj36B3/image.png" alt="" />
                </Container>
            </Box>
        </>
    );
};

export default Footer;