import { Box } from "@mui/material";
import React from "react";

const TabPanel = (props) => {
    const {children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
           {value === index && (
                <Box>{children}</Box>
            )}
        </div>
    );
}

export default TabPanel;