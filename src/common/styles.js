const style = (theme) => ({
    navbar: {
        opacity: 0.8
    },
    frame: {
        [theme.breakpoints.down("sm")] : {
            height: "calc(100vh - 56px)"
        },
        '@media (min-width: 0px) and (orientation: landscape)': {
            height: "calc(100vh - 48px)"
        },
        [theme.breakpoints.up("sm")] : {
            height: "calc(100vh - 64px)"
        }
    },
    appBar: {
        textAlign: "right"
    }
})

const getToolbarHeight = (theme) => ([
    { query: '(min-width: 0px) and (orientation: landscape)', size: 48},
    { query: theme.breakpoints.down("sm"), size: 56},
    { query: theme.breakpoints.up("sm"), size: 64},
])

export { style, getToolbarHeight };