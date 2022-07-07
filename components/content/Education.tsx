import React, { Fragment } from 'react'
import {Divider, Typography, Box} from "@mui/material";
import {EducationInfo} from '../../consts/constants';
import SchoolIcon from '@mui/icons-material/School';

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
                        marginBottom: 2
                    }}
                >
                    <SchoolIcon color="info" /> <b>EDUCATION</b>
                </Typography>
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
                                variant="h6"
                                color="#424242"
                            >
                                {value.courseName} @ {value.schoolName}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="#455a64"
                            >
                                {value.startDate} - {value.isCurrent ? "Present" : value.endDate}
                            </Typography>

                        </Box>
                        <Divider />
                    </Fragment>
                ))
                }
            </Box>
        )
    }
}