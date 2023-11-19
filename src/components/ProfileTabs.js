import { Card, Tab, Tabs } from "@mui/material";
import React from "react";

const ProfileTabs = (props) => {
  const handleChange = (e, newValue) => {
    props.setTab(newValue);
  };

  return (
    <Card sx={{ padding: 0 }}>
      <Tabs value={props.tab} onChange={handleChange} variant="scrollable">
        <Tab label="Postingan" value="posts" />
        <Tab label="Suka" value="liked" />
        <Tab label="Komentar" value="comments" />
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;
