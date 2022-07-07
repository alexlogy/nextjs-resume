import React, { Fragment } from 'react'
import {Divider, Grid, Typography, Box, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import {ExperiencesInfo} from '../../consts/constants';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import WorkIcon from '@mui/icons-material/Work';

export default class Experiences extends React.Component {
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
                <Typography
                    variant="h5"
                    color="#424242"
                    sx={{
                        marginBottom: 2
                    }}
                >
                    <WorkIcon color="info" /> <b>EXPERIENCE</b>
                </Typography>
                {/* Experiences */}
                {Object.entries(ExperiencesInfo).map(([key,value]) => (
                    <Fragment key={key}>
                        <Box
                            sx={{
                                my: 1,
                                mx: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                            }}
                        >
                            <Typography
                                variant="h6"
                                color="#424242"
                            >
                                {value.designation} @ {value.companyName}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="#455a64"
                            >
                                {value.startDate} - {value.isCurrent ? "Present" : value.endDate}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="#455a64"
                            >
                                {value.companyLocation}
                            </Typography>
                            <Grid container
                                  direction="row"
                                  sx={{
                                      my: 0,
                                      mx: 0,
                                      width: '100%',
                                      display: 'flex',
                                      flexDirection: 'row',
                                      alignItems: 'left',
                                  }}
                            >
                                <Grid item
                                      md={12}
                                      sx={{
                                          py: 0,
                                          px: 0,
                                          width: '100%',
                                          display: 'flex',
                                          flexDirection: 'row',
                                          alignItems: 'left',
                                      }}
                                >
                                <List sx={{
                                            width: '100%',
                                            alignItems: 'left',
                                        }}
                                >
                                {Object.entries(value.responsibilities).map(([index, resp]) => (

                                            <ListItem key={index}
                                                      alignItems='flex-start'
                                                      disablePadding
                                                      >
                                                <ListItemIcon sx={{ color: "green" }}>
                                                    <ArrowCircleRightIcon color="info" />
                                                </ListItemIcon>
                                                <ListItemText primary={resp} />
                                            </ListItem>

                                ))}
                                </List>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                    </Fragment>
                ))
                }
            </Box>
        )
    }
}