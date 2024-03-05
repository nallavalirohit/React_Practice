import { Grid,Typography,CssBaseline,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Dashboard = () =>{
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('Logged out');
        navigate('/login');
    }
    return (
        <>
            <CssBaseline/>
            <Grid container>
                <Grid item sm={4} sx={{backgroundColor:'gray', p:5, color:'white'}}>
                    <Typography variant="h5">Email: 16rohit@gmail.com</Typography>
                    <Typography variant="h6">Name: Rohit</Typography>
                    <Button variant='contained' color="warning" size="large" onClick={handleLogout} sx={{mt:8}}>Logout</Button>
                </Grid>
                <Grid item sm={8}>
                    <ChangePassword />
                </Grid>
            </Grid>
        </>
    );
}

export default Dashboard;