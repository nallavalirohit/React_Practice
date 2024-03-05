import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const Layout = () => {
    return (
        <div>
            {/* CSSBaseline is equivalent to CSS reset: margin:0, padding:0 properties */}
            <CssBaseline />
            <Navbar />
            {/* Outlet here will render <Home /> since it is defined as child path in app.js */}
            <Outlet/>
        </div>
    );
}

export default Layout;