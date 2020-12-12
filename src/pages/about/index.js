import React, {useState} from 'react';
import {Frame} from "../../common";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {alternateBackgroundColor} from '../../theme';
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { School, Work, Build } from '@material-ui/icons';
import Collapse from "@material-ui/core/Collapse";
import Education from './education';
import WorkExperience from "./work";
import Skills from "./skills";
import Grow from "@material-ui/core/Grow";
import {Waypoint} from "react-waypoint";

const useStyle = makeStyles((theme) => ({
    frame: {
        backgroundColor: alternateBackgroundColor[50]
    },
    aboutCard: {
        padding: theme.spacing(4)
    },
    aboutCardHolder: {
        [theme.breakpoints.down("md")] : {
            padding: theme.spacing(4)
        },
        [theme.breakpoints.up("md")]: {
            padding: theme.spacing(4)
        }
    },
    bottomDivider: {
        marginBottom: theme.spacing(2)
    },
    content: {
        padding: theme.spacing(2),
        overflowY: "scroll",
        [theme.breakpoints.down("md")]: {
            height: "60vh"
        },
        [theme.breakpoints.up("md")]: {
            height: "50vh"
        },

    }
}))



const content = [
    { tag: "Education", value: <Education />, icon: <School />},
    { tag: "Work", value: <WorkExperience />, icon: <Work />},
    { tag: "Technical Skills", value: <Skills />, icon: <Build />},
]

function AboutPage() {
    const classes = useStyle();
    const [active, setActive] = useState(0);
    const [showing, setVisibility] = useState(false)
    return (
        <Frame>
            <Grid className={classes.frame} container direction={"column"} justify={"center"} spacing={0}>
                <Grid item container justify={"center"} >
                    <Grid item xs={12} sm={11} className={classes.aboutCardHolder}>
                        <Grow in={showing} timeout={1000}>
                            <Paper elevation={2} className={classes.aboutCard}>
                                <Grid container direction={"column"}>
                                    <Typography gutterBottom variant={"h5"}>About</Typography>
                                    <Divider  />
                                    <BottomNavigation showLabels fullWidth value={active}
                                                      onChange={(event, newValue) => {
                                                          setActive(newValue);
                                                      }}>
                                        { content.map((item, idx)=> (
                                            <BottomNavigationAction label={item.tag} icon={item.icon} />
                                        ))}
                                    </BottomNavigation>
                                    <Divider className={classes.bottomDivider} />
                                    { content.map((item, idx) => (
                                        <Collapse in={active === idx} key={idx}>
                                            <Grid item xs={12} spacing={2} wrap={"nowrap"} container className={classes.content}
                                                  direction={"column"} alignItems={"stretch"}>
                                                { item.value }
                                            </Grid>
                                        </Collapse>
                                    ))}
                                    <Waypoint onEnter={() => setVisibility(true)} onLeave={()=>setVisibility(false)} />

                                </Grid>
                            </Paper>
                        </Grow>

                    </Grid>

                </Grid>
            </Grid>
        </Frame>
    )
}

export default AboutPage;