import { TextField, Box, Button, Alert, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration = () =>{
    const [formStatus, setformStatus] = useState({status: 'false', msg: '', type: ''});
    // const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData= {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc: data.get('tc')
        }
        if(actualData.name && actualData.email && actualData.phone && actualData.password && actualData.password_confirmation && actualData.tc !== null){
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
            document.getElementById('registration-form').reset();
            setformStatus({status:'true', msg:'Registration Successful!', type:'success'});
            // navigate('/');
            }else{
                setformStatus({status:'true', msg:'Passwords must match!', type:'error'});
            }
        }else{
            // console.log('All fields are required!...');
            setformStatus({status:'true', msg: 'All fields are required!...', type: 'error'});
        }
    }
    return (
        <>
            <Box component='form' noValidate id='registration-form' sx={{}} onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id="name" name="name" label='Name' />
                <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' />
                <TextField margin="normal" required fullWidth id="phone" name="phone" label='Phone Number' />
                <TextField margin="normal" required fullWidth id="password" name="password" label='Password' type="password"/>
                <TextField margin="normal" required fullWidth id="password_confirmation" name="password_confirmation" label='Confirm Password' type="password"/>
                <FormControlLabel control={<Checkbox value='agree' color="primary" name="tc" id="tc"/>} label="I agree to the term and conditions."/>
                <Box textAlign='center'>
                    <Button type="submit" variant="outlined" sx={{textTransform:'none', fontWeight:'bold', mt:3, mb:2, px: 4}}>Register</Button>
                </Box>
                    <Alert severity={formStatus.type} sx={{display:'flex', justifyContent:'center'}}>{formStatus.msg}</Alert>
            </Box>
        </>
    );
}

export default UserRegistration;