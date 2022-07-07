import React from 'react'
import {Avatar, Divider, Grid, Card, Typography, styled, Paper, Box} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {UserInfo} from '../../consts/constants';


export default class Heading extends React.Component {
    render() {
        return (
            <Box
                sx={{
                    my: 4,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
            >
                {/*<Typography*/}
                {/*    component="h1"*/}
                {/*    variant="h5"*/}
                {/*    color="inherit"*/}
                {/*    sx={{*/}
                {/*        marginBottom: 2*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Manager, Cloud Infrastructure*/}
                {/*</Typography>*/}
                <Divider />

            </Box>
        )
    }
}