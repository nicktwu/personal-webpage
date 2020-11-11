import React from 'react';
import Grid from '@material-ui/core/Grid';
import {style} from './styles';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(style);

function Frame(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.frame} container direction={"row"} justify={"center"} alignItems={"stretch"}>
            { props.children }
        </Grid>
    )
}

export default Frame;