import React, { Fragment } from 'react'
import {Divider, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Grid2} from "@mui/material";
import {EducationInfo} from '../../consts/constants';
import SchoolIcon from '@mui/icons-material/School';
import CircleIcon from '@mui/icons-material/Circle';

export default class Education extends React.Component {
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
                    component="h1"
                    variant="h5"
                    color="#424242"
                    sx={{
                        fontWeight: 700,
                        marginBottom: 2
                    }}
                >
                    <SchoolIcon color="info" /> EDUCATION
                </Typography>
                <Divider />
                {/* Experiences */}
                {Object.entries(EducationInfo).map(([key,value]) => (
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
                                variant="h5"
                                color="#424242"
                            >
                                {value.courseName}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="#424242"
                            >
                                {value.schoolName}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="#455a64"
                            >
                                {value.startDate} - {value.isCurrent ? "Present" : value.endDate}
                            </Typography>
                            <Grid2 container
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
                                <List sx={{
                                    width: '100%',
                                    alignItems: 'left',
                                }}
                                >
                                    {Object.entries(value.responsibilities).map(([index, resp]) => (

                                        <ListItem key={index}
                                                  alignItems='center'
                                                  disableGutters
                                                  sx={{
                                                      paddingLeft: 0,
                                                  }}
                                        >
                                            <ListItemIcon>
                                                <CircleIcon color="info" />
                                            </ListItemIcon>
                                            <ListItemText primary={resp} />
                                        </ListItem>

                                    ))}
                                </List>
                            </Grid2>
                        </Box>
                    </Fragment>
                ))
                }
            </Box>
        )
    }
}