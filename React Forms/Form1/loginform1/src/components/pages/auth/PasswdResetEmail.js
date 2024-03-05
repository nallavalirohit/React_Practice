import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";

const PasswdResetEmail = () =>{
    const [formStatus, setformStatus] = useState({status: 'false', msg: '', type: ''});
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData= {
            email: data.get('email'),
        }
        if(actualData.email){
            console.log(actualData);
            document.getElementById('pwd-reset-email-form').reset();
            setformStatus({status:'true', msg:'Email Sent!', type:'success'});
        }else{
            // console.log('All fields are required!...');
            setformStatus({status:'true', msg: 'Email is required!', type: 'error'});
        }
    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item={true} sm={2} xs={12}>
                    <h1>Password Reset Email</h1>
                    <Box component='form' noValidate id='pwd-reset-email-form' sx={{}} onSubmit={handleSubmit}>
                    <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' />
                    <Box textAlign='center'>
                        <Button type="submit" variant="outlined" sx={{textTransform:'none', fontWeight:'bold', mt:3, mb:2, px: 4}}>Send</Button>
                    </Box>
                        <Alert severity={formStatus.type} sx={{display:'flex', justifyContent:'center'}}>{formStatus.msg}</Alert>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default PasswdResetEmail;