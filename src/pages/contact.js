import React, {useState} from 'react';
import {Frame} from "../common";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "@material-ui/core/Link";
import Fade from "@material-ui/core/Fade";
import {Waypoint} from "react-waypoint";

const useStyle = makeStyles((theme) => ({
    basePadding: {
        padding: theme.spacing(10),
    },
    basePaper: {
        padding: theme.spacing(3),
        textAlign: "center"
    },
    divider: {
        marginBottom: theme.spacing(2)
    }
}))

function ContactPage() {
    const classes = useStyle();
    const [showing, setVisibility] = useState(false)

    return (
        <Frame>
            <Grid item container className={classes.basePadding}
                  direction={"column"} justify={"center"} alignItems={"stretch"}>
                <Fade in={showing} timeout={1000}>
                    <Paper elevation={1} className={classes.basePaper}>
                        <Typography gutterBottom variant={"h5"}>Contact</Typography>
                        <Divider className={classes.divider} />
                        <Waypoint onEnter={() => setVisibility(true)} onLeave={()=>setVisibility(false)} />
                        <Typography gutterBottom variant={"body2"}>For professional connections and recruiting purposes, I can be reached via my <Link href={"https://www.linkedin.com/in/nicholas-wu-748a86180/"}>LinkedIn</Link>.</Typography>
                        <Typography gutterBottom variant={"body2"}>If you are interested in tutoring or need help with course material, you may contact me via <Link href={"mailto:nwu@alum.mit.edu"}>email</Link>. </Typography>
                    </Paper>
                </Fade>

            </Grid>
        </Frame>
    )
}

export default ContactPage;