import React from 'react'
import {Typography, Box, Chip, Stack} from "@mui/material";
import {SkillsInfo} from '../../consts/constants';
import FactCheckIcon from '@mui/icons-material/FactCheck';

export default class Skills extends React.Component {
    render() {

        return (
            <Box
                sx={{
                    my: 2,
                    mx: 0,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant="h5"
                    color="inherit"
                    sx={{
                        marginBottom: 2
                    }}
                >
                    <FactCheckIcon color="info" /> SKILLS
                </Typography>
                {/* Skills */}
                <Stack
                    direction="row"
                    spacing={0}
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        alignContent: 'flex-start'
                    }}
                >
                    {SkillsInfo.map(s => (
                        <Chip
                            key={s}
                            label={s}
                            color="primary"
                            size="medium"
                            clickable={true}
                            sx={{
                                marginRight: 1,
                                marginBottom: 1,
                            }}
                        />
                        // <Chip label="Small" size="small" key={s} />
                    ))}

                </Stack>

            </Box>
        )
    }
}