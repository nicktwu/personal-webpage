import React from "react";
import {NavigationBar, Loader} from './common';
import {HomePage, AboutPage, ContactPage} from "./pages";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider} from '@material-ui/core/styles';
import { theme } from './theme';
import { Element } from 'react-scroll';
import {Toolbar} from "@material-ui/core";


const pages = [
    { name: "Home", id: "homePage", handler: () => {console.log("home")}, component: <HomePage/>, top: true},
    { name: "About", id: "aboutPage", handler: () => {console.log("about")}, component: <AboutPage/>},
    { name: "Contact", id: "contactPage", handler: () => {console.log("contact")}, component: <ContactPage/>}
]

function App() {

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Loader />
            <NavigationBar pages={pages}/>
            <Toolbar/>
            <Grid container spacing={0} direction={"column"} alignItems={"stretch"}>
                { pages.map((page) => (
                    <React.Fragment>
                        <Element key={page.name} name={page.id}>
                            {page.component}
                        </Element>
                    </React.Fragment>
                ))}
            </Grid>
        </MuiThemeProvider>
  );
}

export default App;
