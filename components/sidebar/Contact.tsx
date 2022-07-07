import React from 'react'
import {Grid, Typography, Tooltip, Box} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {UserInfo} from '../../consts/constants';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import WebIcon from '@mui/icons-material/Web';

export default class Contact extends React.Component {
    render() {
        return (
            <Box
                sx={{
                    my: 2,
                    mx: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                }}
            >
                <Typography
                    variant="h5"
                    color="inherit"
                    sx={{
                        marginBottom: 2
                    }}
                >
                    <ContactPageIcon color="info" /> CONTACT
                </Typography>
                <Grid container
                      direction="row"
                      alignItems='left'
                      spacing={0}
                >
                    <Grid item
                          xs={12}
                          md={2}
                    >
                        <Tooltip title="Website">
                            <WebIcon />
                        </Tooltip>
                    </Grid>
                    <Grid item
                          xs={12}
                          md={10}
                    >
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                        >
                            <a href={UserInfo.website} target="_blank" rel="noreferrer">{UserInfo.website}</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container
                      direction="row"
                      alignItems='left'
                      spacing={0}
                    >
                    <Grid item
                          xs={12}
                          md={2}
                          >
                        <Tooltip title="Email">
                            <EmailIcon />
                        </Tooltip>
                    </Grid>
                    <Grid item
                          xs={12}
                          md={10}
                    >
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                        >
                            <a href={"mailto:" + UserInfo.email} target="_blank" rel="noreferrer">{UserInfo.email}</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container
                      direction="row"
                      alignItems='left'
                      spacing={0}
                >
                    <Grid item
                          xs={12}
                          md={2}
                    >
                        <Tooltip title="Telegram">
                            <TelegramIcon />
                        </Tooltip>
                    </Grid>
                    <Grid item
                          xs={12}
                          md={10}
                    >
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                        >
                            <a href={"https://t.me/" + UserInfo.telegramID.substring(1)} target="_blank" rel="noreferrer">{UserInfo.telegramID}</a>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container
                      direction="row"
                      alignItems='left'
                      spacing={0}
                >
                    <Grid item
                          xs={12}
                          md={2}
                    >
                        <Tooltip title="Current Location">
                            <MyLocationIcon />
                        </Tooltip>
                    </Grid>
                    <Grid item
                          xs={12}
                          md={10}
                    >
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                        >
                        {UserInfo.location}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container
                      direction="row"
                      alignItems='left'
                      spacing={0}
                >
                    <Grid item
                          xs={12}
                          md={2}
                    >
                        <Tooltip title="LinkedIn">
                            <LinkedInIcon />
                        </Tooltip>
                    </Grid>
                    <Grid item
                          xs={12}
                          md={10}
                    >
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                        >
                            <a href={UserInfo.linkedin} target="_blank" rel="noreferrer">{UserInfo.linkedin}</a>
                        </Typography>
                    </Grid>
                    <Grid container
                          direction="row"
                          alignItems='left'
                          spacing={0}
                    >
                        <Grid item
                              xs={12}
                              md={2}
                        >
                            <Tooltip title="GitHub">
                                <GitHubIcon />
                            </Tooltip>
                        </Grid>
                        <Grid item
                              xs={12}
                              md={10}
                        >
                            <Typography
                                variant="subtitle1"
                                color="inherit"
                            >
                                <a href={UserInfo.github} target="_blank" rel="noreferrer">{UserInfo.github}</a>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Box>
        )
    }
}