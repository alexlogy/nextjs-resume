import React, { Fragment } from 'react'
import {Divider, Typography, Box} from "@mui/material";
import { CertificationsInfo } from '../../consts/constants';
import BadgeIcon from '@mui/icons-material/Badge';

export default class Certifications extends React.Component {
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
                    <BadgeIcon color="info" />  <b>CERTIFICATIONS</b>
                </Typography>
                {/* Experiences */}
                {Object.entries(CertificationsInfo).map(([key,value]) => (
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
                                {value.certName} @ {value.certIssuer}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="#455a64"
                            >
                                {value.certDate} - {value.expiryDate}
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