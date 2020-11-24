import {ArrowBackIos, ArrowForwardIos, FiberManualRecord, Lens, ChevronLeft, ChevronRight} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@material-ui/core";
import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";

const useStyle = makeStyles((theme) => ({

    carouselContainer:{
        width: "100%",
        height: "100%",
        position: "relative",
        transitionProperty: "margin-left",
        transitionDuration: "0.7s",
        transitionTimingFunction: "ease"
    },
    carouselItem: {
        height: "100%",
        width: "100%"
    },
    carouselImage: {
        height:"100%",
        width:"100%",
        objectFit: "cover"
    },
    carouselFilter: {
        position: "absolute",
        height: "100%",
        width: "100%",
        overflowX: "hidden"
    },
    carouselLeftArrow: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        paddingLeft: theme.spacing(2),
        zIndex:101
    },
    carouselRightArrow: {
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        paddingRight: theme.spacing(2),
        zIndex:101
    },
    arrowContainer: {
        height: "100%",
    },
    bottomControlContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: theme.spacing(1),
        zIndex: 101,
        opacity: "50%"
    },
    smallPadding: {
        padding: theme.spacing(1)
    },
    smallDots: {
        fontSize: theme.typography.caption.fontSize
    }

}))

const carouselSrcs = [
    "https://res.cloudinary.com/nwu/image/upload/v1521056931/backbay_sunset.jpg",
    "https://res.cloudinary.com/nwu/image/upload/v1521056932/kresge_sunset.jpg",
    "https://res.cloudinary.com/nwu/image/upload/v1521056926/chicagolighthouse_daytime.jpg",
    "https://res.cloudinary.com/nwu/image/upload/v1606245332/east_rock_sunset.jpg",
    "https://res.cloudinary.com/nwu/image/upload/v1606245433/longwharf.jpg"
]

export default function Carousel() {
    const classes = useStyle();
    const [slide, setSlide] = useState(0);



    return (
        <div className={classes.carouselFilter}>
            <Grid container direction={"column"} className={classes.carouselContainer}
                  style={{marginLeft: "-" + (slide*100).toString() + "vw"}}>
                { carouselSrcs.map((url, idx) => (
                    <Grid item className={classes.carouselItem} key={idx}>
                        <img className={classes.carouselImage} src={url}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.bottomControlContainer}>
                <Grid container direction={"row"} justify={"center"} className={classes.arrowContainer}>
                    <Grid item>
                        <Card raised>
                            <Grid container direction={"row"} alignItems={"center"} justify={"center"} spacing={2} className={classes.smallPadding}>
                                <Grid item>
                                    <IconButton onClick={() => setSlide((slide + carouselSrcs.length - 1) % carouselSrcs.length)}
                                                size={'small'}><ChevronLeft/></IconButton>
                                </Grid>
                                { carouselSrcs.map((item, idx) => {
                                    return (
                                        <Grid item key={idx} className={classes.smallDots}>
                                            <IconButton color={(idx === slide) ? "primary" : "default"}
                                                        onClick={() => {setSlide(idx)}}
                                                        size={"small"}>
                                                <FiberManualRecord />
                                            </IconButton>
                                        </Grid>
                                    )
                                })}
                                <Grid item>
                                    <IconButton onClick={() => setSlide((slide + 1) % carouselSrcs.length)}
                                                size={'small'}><ChevronRight/></IconButton>
                                </Grid>
                            </Grid>
                        </Card>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}