import React, { useState } from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import shopping_pic from "../../../images/shopping_pic.png";
import TabPanel from "./TabPanel";
import UserLogin from "./UserLogin";
import UserRegistration from "./UserRegistration";

const LoginReg = () => {
  const [tab, setTab] = useState(0);

  const handleClick = (event, newValue) => {
    setTab(newValue);
  };
  return (
    <div>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${shopping_pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: {xs:'none', sm:'block'}
          }}
        ></Grid>

        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={tab}
                  textColor="primary"
                  indicatorColor="primary"
                  onChange={handleClick}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={tab} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={tab} index={1}>
                <UserRegistration />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginReg;
