import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import {getToolbarHeight, style} from "./styles";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-scroll';
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { scroller } from 'react-scroll'
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(style);

function NavigationBar({ pages }) {
    const classes = useStyles();
    const muiTheme = useTheme();
    const heightMap = getToolbarHeight(muiTheme);

    let height = 64;
    for (let idx = 0; idx < heightMap.length; idx++) {
        // it is apparently okay to call this hook multiple times so
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let match = useMediaQuery(heightMap[idx].query);
        if (match) {
            height = heightMap[idx].size;
        }
    }


    const [value, setValue] = React.useState(0);
    const [transitioning, setTransitioning] = React.useState(false);
    let transitioningTimeout = null;
    const handleChange = (event, newValue) => {
        scroller.scrollTo(pages[newValue].id, {
            offset: -1*height,
            smooth: "easeInOutQuint"
        })
    };

    return (
        <AppBar position={"fixed"} className={classes.navbar}>
            <Toolbar className={classes.appBar}>
                <Grid container direction={"row-reverse"} justify={"center"}>
                    <Tabs value={value} indicatorColor={"secondary"} onChange={handleChange}>
                        { pages.map((page) => (
                            <Tab key={page.name} color={"inherit"} label={page.name} >
                            </Tab>
                        ))}
                    </Tabs>
                    <Hidden>
                        {pages.map((page, idx) => (
                            <Link key={page.name} to={page.id} spy smooth={"easeInOutQuint"} offset={-5*height}
                                  onSetActive={()=>{
                                      if (!transitioning) setValue(idx);
                                  }}/>
                        ))}
                    </Hidden>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar;