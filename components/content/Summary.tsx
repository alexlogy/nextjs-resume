import React from 'react'
import {Divider, Typography, Box} from "@mui/material";
import { SummaryInfo } from '../../consts/constants';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default class Summary extends React.Component {
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
                    <AccountBoxIcon color="info" />  SUMMARY
                </Typography>
                <Divider />
                {/* Summary */}
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
                        variant="body1"
                        color="#424242"
                    >
                        {SummaryInfo.summary}
                    </Typography>
                </Box>
            </Box>
        )
    }
}