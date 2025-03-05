import React from 'react'
import Contact from '../components/sidebar/Contact';
import Skills from '../components/sidebar/Skills';
import Programming from '../components/sidebar/Programming';
import Languages from '../components/sidebar/Languages';
import {Avatar, Grid2, Typography, Box} from "@mui/material";
import {UserInfo} from '../consts/constants';

export default class Sidebar extends React.Component {

    render() {
        return (
            // @ts-ignore
            <Grid2
                  item
                  size={{
                      xs: 12,
                      sm: 5,
                      lg: 5,
                      xl: 4,
                  }}
                  sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#4D4D4D',
                      color: '#FFFFFF'
                  }}
            >
                <Box
                    sx={{
                        my: 4,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                    }}
                >
                    <Avatar alt="{UserInfo.firstName} {UserInfo.lastName}" src="/images/avatar/avatar.jpg"
                            sx={{
                                width: 128,
                                height: 128,
                                flex: 1,
                                alignSelf: 'center',
                            }}
                    />
                    <Typography
                        variant="h5"
                        color="inherit"
                        sx={{
                            alignSelf: 'center',
                            paddingTop: 1,
                        }}
                    >
                        {UserInfo.firstName} {UserInfo.lastName}
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="inherit"
                        sx={{
                            alignSelf: 'center',
                            paddingTop: 1,
                            textAlign: 'center',
                        }}
                    >
                        {UserInfo.aboutMe}
                    </Typography>
                    <Contact />
                    <Skills />
                    <Programming />
                    <Languages />
                </Box>
            </Grid2>
        )
    }
}