import React, {useState} from 'react';
import OnImagesLoaded from 'react-on-images-loaded';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Typography} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";

const useStyle = makeStyles((theme) => ({
   loader: {
       height: "50vh",
       width: "50vw"
   }
}))

function Loader() {
    const [loading, setLoading] = useState(true)
    const classes = useStyle();
    return (
        <React.Fragment>
            <OnImagesLoaded onLoaded={() => setLoading(false)} onTimeout={() => setLoading(false)} timeout={5000} />
            <Dialog open = {loading}>
                <Grid className={classes.loader} spacing={2} container direction={"column"} justify={"center"} alignItems={"center"}>
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                    <Grid item>
                        <Typography variant={"body1"}>Loading content...</Typography>
                    </Grid>

                </Grid>
            </Dialog>
        </React.Fragment>

    )
}

export default Loader;