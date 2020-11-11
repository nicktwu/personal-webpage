import React, {useState} from 'react';
import { Frame } from "../common";
import {Grid, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import {backgroundColor} from "../theme";
import Grow from "@material-ui/core/Grow";
import Fade from "@material-ui/core/Fade";
import {Waypoint} from "react-waypoint";

const useStyle = makeStyles((theme) => ({
    homeFrame: {
        backgroundColor: backgroundColor[100]

    },
    pictureCard: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper
    }
}))

export default function HomePage() {
    const classes = useStyle();
    const [showing, setVisibility] = useState(false);

    return (
        <Frame>
            <Grid className={classes.homeFrame} container direction={"row"} spacing={1}>
                <Grid item md={2} />


                <Fade in={showing} timeout={500}>
                    <Grid item xs={12} md={4} container alignItems={"center"} justify={"center"}>
                        <Grid item>
                            <Card raised className={classes.pictureCard}>
                                <img style={{height: 350, width:300, objectFit: "cover"}} src={"https://res.cloudinary.com/nwu/image/upload/v1604087366/profilepic.jpg"} />
                            </Card>
                        </Grid>
                    </Grid>
                </Fade>

                <Grow in={showing} timeout={1000}>
                    <Grid item xs={12} md={4} spacing={2} container direction={"column"} alignItems={"center"} justify={"center"}>
                        <Grid item>
                            <Box textAlign={"center"}><Typography variant={"h4"}>Nicholas Wu</Typography></Box>
                        </Grid>
                        <Waypoint onEnter={() => setVisibility(true)} onLeave={()=>setVisibility(false)} />
                        <Grid item>
                            <Box textAlign={"center"}><Typography variant={"subtitle2"}>
                                Hi! I'm Nick, a first-year PhD student in economics at Yale University. I'm interested in microeconomic theory, mathematics, economics, physics, ML/AI, and applying what I do to interesting problems.
                            </Typography></Box>
                        </Grid>
                    </Grid>
                </Grow>

                <Grid item md={2} />
            </Grid>
        </Frame>
    )
};