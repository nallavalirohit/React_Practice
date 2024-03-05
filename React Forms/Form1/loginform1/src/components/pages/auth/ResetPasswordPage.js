import { Grid,TextField,Box,Button,Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () =>{
    const [formStatus, setformStatus] = useState({status: 'false', msg: '', type: ''});
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData= {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }
        if(actualData.password && actualData.password_confirmation){
            if(actualData.password === actualData.password_confirmation){
                console.log(actualData);
                document.getElementById('pwd-reset-form').reset();
                setformStatus({status:'true', msg:'Password reset successful!. Redirecting to login page...', type:'success'});
                setTimeout(()=>{
                    navigate('/login');
                },3000);
            }else{
                setformStatus({status:'true', msg:'Password must match!', type:'error'});
            }
        }else{
            // console.log('All fields are required!...');
            setformStatus({status:'true', msg: 'All fields are required!', type: 'error'});
        }
    }

    return (
        <>
            <Grid container justifyContent="center">
                <Grid item={true} sm={2} xs={12}>
                    <h1>Password Reset</h1>
                    <Box component='form' noValidate id='pwd-reset-form' sx={{}} onSubmit={handleSubmit}>
                    <TextField margin="normal" required fullWidth id="password" name="password" label='New Password' type="password"/>
                    <TextField margin="normal" required fullWidth id="password_confirmation" name="password_confirmation" label='Confirm Password' type="password"/>
                    <Alert severity={formStatus.type} sx={{display:'flex', justifyContent:'center'}}>{formStatus.msg}</Alert>
                    <Box textAlign='center'>
                        <Button type="submit" variant="outlined" sx={{textTransform:'none', fontWeight:'bold', mt:3, mb:2, px: 4}}>Send</Button>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default ResetPasswordPage;