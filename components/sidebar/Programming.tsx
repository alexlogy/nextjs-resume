import React, { Fragment } from 'react'
import {Typography, Box} from "@mui/material";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import {ProgrammingInfo} from '../../consts/constants';
import CodeIcon from '@mui/icons-material/Code';

function ProgrammingSkill(language: string, proficiency: number) {
    return (
        <>
            <Typography
            variant="subtitle1"
            color="inherit"
            >
                {language}
            </Typography>
            <LinearProgressWithLabel value={proficiency}/>
        </>
    );
}

function LinearProgressWithLabel(props: any) {
    let percentage: number = props.value
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography
                    variant="body2"
                    color="#FFFFF"
                >
                    {percentage}%
                </Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
};

export default class Programming extends React.Component {
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
                    <CodeIcon color="info" /> PROGRAMMING
                </Typography>
                {/* Programming Skills */}
                {Object.entries(ProgrammingInfo).map(([key,value]) => (
                    <Fragment key={key}>
                        <Typography
                            variant="subtitle1"
                            color="inherit"
                        >
                            {key}
                        </Typography>
                        <LinearProgressWithLabel value={value}/>
                    </Fragment>
                    ))
                }
            </Box>
        )
    }
}