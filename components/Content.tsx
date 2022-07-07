import React from 'react'
import {Grid} from "@mui/material";
import Experiences from '../components/content/Experiences';
import Education from "./content/Education";
import Certifications from "./content/Certifications";

export default class Content extends React.Component {
    render() {
        return (
            <Grid item
                  xs={false}
                  sm={8}
                  md={8}
                  sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: '#FFFFFF',
                      color: '#000000'
                  }}
            >
                <Experiences />
                <Education />
                <Certifications />
            </Grid>
        )
    }
}