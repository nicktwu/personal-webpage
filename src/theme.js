import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import blueGrey from "@material-ui/core/colors/blueGrey";
import grey from "@material-ui/core/colors/grey";
import indigo from "@material-ui/core/colors/indigo";

const backgroundColor = blueGrey;
const alternateBackgroundColor = grey;
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#702632",
        },
        secondary: {
            main: indigo[100],
        },
        background: {
            default: backgroundColor[100],
            paper: backgroundColor[50]
        },
        contrastThreshold: 3
    },
});

export { theme, backgroundColor, alternateBackgroundColor };