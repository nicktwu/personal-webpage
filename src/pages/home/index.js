import React, {useState} from 'react';
import { Frame } from "../../common";
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import {backgroundColor} from "../../theme";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";
import {Waypoint} from "react-waypoint";
import Carousel from "./carousel";

const useStyle = makeStyles((theme) => ({
    homeFrame: {
        backgroundColor: backgroundColor[100],
    },
    pictureCard: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    },
    backgroundImage: {
        width: "100%",
        position: "absolute",
        height: "100%",
        objectFit: "cover",
        zIndex: 100,
        opacity: "70%"
    },
    personalImage: {
        height: 320,
        width:270,
        objectFit: "cover",
    },
    homeContent: {
        zIndex: 101,
        padding: theme.spacing(2),
    },
    mainCard: {
        padding: theme.spacing(4),

    },

}))



export default function HomePage() {
    const classes = useStyle();
    const [showing, setVisibility] = useState(false);

    return (
        <React.Fragment>
            <Frame>
                <Carousel />



                <Grid className={classes.homeFrame} container direction={"row"} >
                    <Grid item md={2} />

                    <Grid item md={8} container direction={"column"} justify={"center"} alignItems={"center"} className={classes.mainCard}>
                        <Card raised className={classes.homeContent}>
                            <Grid container direction={"row"} spacing={2}>
                                <Fade in={showing} timeout={500}>
                                    <Grid item xs={12} md={6} container alignItems={"center"} justify={"center"}>
                                        <img className={classes.personalImage} src={"https://res.cloudinary.com/nwu/image/upload/v1604087366/profilepic.jpg"} />
                                    </Grid>
                                </Fade>
                                <Grow in={showing} timeout={1000}>
                                    <Grid item xs={12} md={6} spacing={2} container direction={"column"} alignItems={"center"} justify={"center"}>
                                        <Grid item>
                                            <Box textAlign={"center"}><Typography variant={"h4"}>Nicholas Wu</Typography></Box>
                                        </Grid>
                                        <Waypoint onEnter={() => setVisibility(true)} onLeave={()=>setVisibility(false)} />
                                        <Grid item>
                                            <Box textAlign={"center"}><Typography variant={"subtitle2"}>
                                                Hi! I'm Nick, a first-year PhD student in economics at Yale University. I'm interested in microeconomic theory, mathematics, physics, ML/AI, and applying what I do to interesting problems.
                                            </Typography></Box>
                                        </Grid>
                                    </Grid>
                                </Grow>
                            </Grid>


                        </Card>




                    </Grid>

                    <Grid item md={2} />
                </Grid>
            </Frame>

        </React.Fragment>
    )
};