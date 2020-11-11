import React from "react";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

function Skills() {
    return (
        <Grid item>
            <GridList cols={3}>
                <GridListTile>
                    <img src={"https://res.cloudinary.com/nwu/image/upload/v1605045910/python.png"} alt={"Python"}/>
                    <GridListTileBar title={"Python"}/>
                </GridListTile>
                <GridListTile>
                    <img src={"https://res.cloudinary.com/nwu/image/upload/v1605045942/react.jpg"} alt={"React"}/>
                    <GridListTileBar title={"React.js"} />
                </GridListTile>
                <GridListTile>
                    <img src={"https://res.cloudinary.com/nwu/image/upload/v1605045704/java.png"} alt={"Java"} />
                    <GridListTileBar title={"Java"}/>
                </GridListTile>
                <GridListTile>
                    <img src={"https://res.cloudinary.com/nwu/image/upload/v1605046057/golang.jpg"} alt={"Golang"}/>
                    <GridListTileBar title={"Golang"} />
                </GridListTile>
                <GridListTile>
                    <img src={"https://res.cloudinary.com/nwu/image/upload/v1605046128/pytorch.png"} alt={"Pytorch"}/>
                    <GridListTileBar title={"Machine Learning"} subtitle={"Pytorch, Tensorflow"}/>
                </GridListTile>
                <GridListTile>
                    <img src={"https://res.cloudinary.com/nwu/image/upload/v1605046209/pandas.png"} alt={"Pandas"}/>
                    <GridListTileBar title={"Data Science"} subtitle={"Pandas, Numpy"} />
                </GridListTile>
            </GridList>
        </Grid>
    )
}

export default Skills;