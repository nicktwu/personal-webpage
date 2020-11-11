import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import {Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {Work} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    workInfo: {
        [theme.breakpoints.down("md")] : {
            textAlign: "center"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left"
        },
    }
}));

function WorkEntry(props ) {
    const classes = useStyles();
    return (
        <Grid item container direction={"row"} spacing={2}>
            <Grid item xs={12} md={10} container direction={"column"}>
                <Grid item className={classes.workInfo}>
                    <Typography variant={"body1"} gutterBottom>{props.title} - <i>{props.company}</i></Typography>
                </Grid>
                <Grid item className={classes.workInfo}>
                    { props.description.map((entry, idx) => (
                        <Typography key={props.title+props.company+idx.toString()} variant={"subtitle2"} >- {entry + "\n"}</Typography>
                    )) }
                </Grid>
            </Grid>
            <Grid item xs={12} md={2} container justify={"center"}>
                <Typography variant={"caption"}>{props.date}</Typography>
            </Grid>
        </Grid>
    )
}

function WorkExperience() {
    return (
        <React.Fragment>
            <Grid item><Typography><b>Teaching</b></Typography></Grid>
            <Divider />
            <WorkEntry title={"Tutor"} company={"Private tutoring"} date={"Sep '16 - Jun '20"} description={["Topics tutored include high school competition math (AMC/AIME), AP Physics, AP Chemistry, discrete mathematics, software design, and algorithms."]} />
            <Divider light/>
            <WorkEntry title={"Teaching Assistant"} company={"MIT, Design and Analysis of Algorithms"} date={"Sep '18 - Dec '19"}
                       description={[
                           "Handled course logistics and managed staff of 20+ graders",
                           "Taught recitation sections and held office hours",
                           "Created problem sets questions, exam problems, and other miscellaneous course content"]} />
            <Divider light />
            <WorkEntry title={"Teaching Assistant"} company={"MIT, Computer and Network Security"} date={"Jan-Jun 2018"}
                       description={[
                           "Held office hours and answered Piazza questions on course material",
                           "Mentored students through final project explorations in various cybersecurity topics"]} />

            <Grid item><Typography><b>Industry</b></Typography></Grid>
            <Divider />
            <WorkEntry title={"Quantitative Research Intern"} company={"Quantlab Financial, LLC"} date={"Jun-Aug 2018"}
                       description={["Analyzed financial data to formulate and assess high frequency trading strategies",
                       "Applied data science techniques to make quantitative assessments on trading models"]}/>
            <Divider light />
            <WorkEntry title={"Software Engineering Intern"} company={"IMC Financial Markets"} date={"Jun-Aug 2017"}
                       description={["Developed a Configuration-as-a-Service project to manage company deployments across trading systems",
                       "Devised configuration algorithm to parse and build configuration files from templates"]}/>
            <Divider light />
            <WorkEntry title={"Software Engineering Intern"} company={"Ab Initio Software"} date={"Jun-Aug 2016"}
                       description={["Worked on performance optimization for data processing in distributed systems",
                       "Created profiling tests to benchmark distributed computation"]} />
            <Divider light />
            <WorkEntry title={"Software Engineering Intern"} company={"OSIsoft"} date={"Jan 2016"}
                       description={["Created an authenticated web application as a user interface to access data from CanSat sensors in real-time",
                       "Wrote custom Node middleware to allow Node access to OSIsoft’s Qi System, and designed custom CSS for display on the web user interface, incorporating JavaScript charting libraries for data visualization"]}/>
        </React.Fragment>
    )
}

export default WorkExperience