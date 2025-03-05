import React from 'react'
import {Grid2} from "@mui/material";
import Experiences from '../components/content/Experiences';
import Education from "./content/Education";
import Certifications from "./content/Certifications";
import Summary from "./content/Summary";

export default class Content extends React.Component {
    render() {
        return (
            // @ts-ignore
            <Grid2 item
                   size={{
                       xs: 12,
                       sm: 5,
                       lg: 5,
                       xl: 4,
                   }}
                  sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'inherit',
                      color: '#000000'
                  }}
            >
                <Summary />
                <Experiences />
                <Education />
                <Certifications />
            </Grid2>
        )
    }
}