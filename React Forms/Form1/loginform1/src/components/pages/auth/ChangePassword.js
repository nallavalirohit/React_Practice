import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";


const ChangePassword = () => {

    const [formStatus, setformStatus] = useState({status: false, msg:'', type: ''});

    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            confirm_password: data.get('confirm_password')
        }

        if(actualData.password && actualData.confirm_password){

            if(actualData.password === actualData.confirm_password){
                console.log(actualData);
                document.getElementById('password-change-form').reset();
                setformStatus({status:true, msg:'Password changed!', type:'success'});
            }else{
                setformStatus({status:true, msg:'Password did not match!', type:'error'});
            }
        }
    }
    return (
        <>
            <Box sx={{display:'flex', flexDirection: 'column', flexWrap:'wrap', maxWidth: 600, mx:4}}>
                <h1>Change Password</h1>
                <Box component= 'form' onSubmit={handleSubmit} sx={{mt:2}} id="password-change-form">
                    <TextField margin="normal" required fullWidth name="password" label="New Password" type="password" id="password"/>
                    <TextField margin="normal" required fullWidth name="confirm_password" label="Confirm Password" type="password" id="confirm_password"/>
                    <Box textAlign='center'>
                        <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Update</Button>
                    </Box>
                    {formStatus.status? <Alert severity={formStatus.type}>{formStatus.msg}</Alert>: ''}
                </Box>
            </Box>
        </>
    );
}

export default ChangePassword;