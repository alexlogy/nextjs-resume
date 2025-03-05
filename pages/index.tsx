import type { NextPage } from 'next'
import Head from 'next/head'
import {createTheme, CssBaseline, Grid2, ThemeProvider} from "@mui/material";
import Sidebar from '../components/Sidebar';
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/500.css"
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/300.css"; // Specify weight
import "@fontsource/montserrat/400.css"; // Specify weight
import "@fontsource/montserrat/500.css"; // Specify weight
import "@fontsource/montserrat/600.css"; // Specify weight
import "@fontsource/montserrat/700.css"; // Specify weight
import "@fontsource/montserrat/400-italic.css"; // Specify weight and style
import "@fontsource/montserrat/500-italic.css"; // Specify weight
import "@fontsource/montserrat/600-italic.css"; // Specify weight
import "@fontsource/montserrat/700-italic.css"; // Specify weight
import {SiteInfo, UserInfo} from '../consts/constants';
import Content from "../components/Content";

const theme = createTheme({
   typography: {
       fontSize: 12,
       fontFamily: [
           'Montserrat',
           'Open Sans',
           '-apple-system',
       ].join(','),
       h5: {
           fontSize: 18,
           fontWeight: 500,
       },
       h6: {
           fontSize: 16,
           fontWeight: 400,
       },
       subtitle1: {
           fontWeight: 400,
       },
       subtitle2: {
           fontWeight: 400,
       }
   },
});

const Home: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Head>
                    <title>Resume - {UserInfo.firstName} {UserInfo.lastName}</title>
                    <meta name="description" content={SiteInfo.metaDescription} />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                {/*<Header />*/}
                <Grid2 container component="main" sx={{ height: '100vh' }}>
                    <Sidebar />
                    <Content />
                </Grid2>

        </ThemeProvider>
    )
}

export default Home
