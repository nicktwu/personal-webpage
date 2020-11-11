import React from "react";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    educationInfo: {
        [theme.breakpoints.down("md")] : {
            textAlign: "center"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left"
        },
    }
}));

function Entry(props ) {
    const classes = useStyles();
    return (
        <Grid item container direction={"row"} spacing={2}>
            <Grid item xs={12} md={1} container justify={"center"}>
                <Avatar src={ props.icon } alt={props.alt}/>
            </Grid>
            <Grid item xs={12} md={9} container direction={"column"}>
                <Grid item className={classes.educationInfo}><Typography variant={"button"}>{ props.school }</Typography></Grid>
                <Grid item className={classes.educationInfo}><Typography variant={"caption"}>{ props.program }</Typography></Grid>
            </Grid>
            <Grid item xs={12} md={2} container justify={"center"}>
                <Typography variant={"subtitle2"}>{ props.date }</Typography>
            </Grid>
        </Grid>
    )
}

function Education() {
    return (
        <React.Fragment>

            <Entry icon={"https://res.cloudinary.com/nwu/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1605030985/yale_icon.jpg"} alt={"Y"}
                   school={"Yale University"} program={"Ph.D., Economics"} date={"2020-Present"} />
            <Divider light />
            <Entry icon={"https://res.cloudinary.com/nwu/image/upload/v1605031255/mit_icon.svg"}
                   school={"Massachusetts Institute of Technology"} program={"M.Eng., Computer Science"} date={"2019-2020"}/>
            <Divider light />
            <Entry icon={"https://res.cloudinary.com/nwu/image/upload/v1605031255/mit_icon.svg"}
                   school={"Massachusetts Institute of Technology"} program={"B.S., Theoretical Mathematics, Electrical Engineering & Computer Science"} date={"2015-2019"} />
        </React.Fragment>
    )
}

export default Education;