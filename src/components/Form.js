import React from "react";
import Header from "./Header";
import { Typography, Button, Grid } from "@mui/material"
import Ekle from "./Ekle";


function Form() {
    return (
        <Grid container

            justifyContent="center"
            marginTop={15}
            spacing={2}
            sx={{
                display: "flex",
                alignItems: "flex-start"

            }}
        >
            <Grid item
             alignItems="center"
             justifyItems={"center"}
             justifyContent="center"
                sx={{
                    width: 1000,
                    height: 670,


                    backgroundColor: 'white',
                    borderRadius: '50',
                    shape: "rounded"
                }}>



                <Header></Header>
                <Ekle></Ekle>
               








            </Grid>
        </Grid >
    );
}

export default Form;