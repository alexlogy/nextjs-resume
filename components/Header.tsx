import React from 'react'
import {Avatar, Divider, Grid, Card, Typography, styled, Paper} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default class Header extends React.Component {
    render() {
        return (

            <Grid container rowSpacing={1} spacing={0}>
                <Grid item xs={6}>
                    <Item>
                        <Avatar alt="Remy Sharp" src="/images/avatar/avatar.jpg"
                                sx={{ width: 128, height: 128, flex: 1}}
                        />
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            noWrap
                            sx={{ flex: 1 }}
                        >
                            Test
                        </Typography>
                    </Item>


                </Grid>
                <Grid item xs={6} md={4}>
                    <Card variant="outlined">T</Card>
                </Grid>
                <Divider />
            </Grid>
        )
    }
}