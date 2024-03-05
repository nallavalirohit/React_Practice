import { TextField,Button,Box,Alert } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const UserLogin = () =>{

    const [formStatus, setformStatus] = useState({status: 'false', msg: '', type: ''});
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData= {
            email: data.get('email'),
            password: data.get('password')
        }
        if(actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById('login-form').reset();
            setformStatus({status:'true', msg:'Login Successful!', type:'success'});
            navigate('/dashboard');
        }else{
            // console.log('All fields are required!...');
            setformStatus({status:'true', msg: 'All fields are required!...', type: 'error'});
        }
    }

    return (
        <>
            <Box component='form' noValidate id='login-form' sx={{}} onSubmit={handleSubmit}>
                <TextField margin="normal" required fullWidth id="email" name="email" label='Email Address' />
                <TextField margin="normal" required fullWidth id="password" name="password" label='Password' type="password"/>
                <Box textAlign='center'>
                    <Button type="submit" variant="outlined" sx={{textTransform:'none', fontWeight:'bold', mt:3, mb:2, px: 4}}>Login</Button>
                </Box>
                    <NavLink to='/pwdresetemail'>Forgot Password?</NavLink>
                    <Alert severity={formStatus.type} sx={{display:'flex', justifyContent:'center'}}>{formStatus.msg}</Alert>
            </Box>
        </>
    );
}

export default UserLogin;