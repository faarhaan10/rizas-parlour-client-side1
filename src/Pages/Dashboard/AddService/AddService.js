import * as React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'orange',
        },
        '&:hover fieldset': {
            borderColor: 'hotpink',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const { img, ...rest } = data;

        const formData = new FormData();
        formData.append('image', img[0]);
        formData.append('title', rest.title);
        formData.append('vendor', rest.vendor);
        formData.append('price', rest.price);
        formData.append('flavour', rest.flavour);
        formData.append('description', rest.description);

        fetch('http://localhost:5000/soaps', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    alert('Succesfully added .');
                }
            })
    };


    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 5 }}
        >

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Service name"
                        type='text'
                        {...register("serviceTitle", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Price"
                        type='number'
                        {...register("price", { required: true })} />
                </Grid>


                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Rating"
                        type='number'
                        defaultValue='3'
                        {...register("rating", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Description"
                        type='text'
                        {...register("description", { required: true })} />
                </Grid>

                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        label="Image URL"
                        type='text'
                        {...register("image", { required: true })} />
                </Grid>
                {/* 
                <Grid item xs={4} sm={4} md={4} >
                    <CssTextField
                        sx={{ width: 1 }}
                        accept="image/png, image/jpg, image/jpeg"
                        multiple
                        type="file"
                        {...register("img", { required: true })} />
                </Grid> */}

            </Grid>
            <Button color="warning" variant="contained" sx={{ mt: 2 }} type='submit' >Add Service</Button>
        </Box>
    );
};

export default AddService;