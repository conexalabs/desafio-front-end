import React from 'react';

import {
    createMuiTheme,
    makeStyles,
} from '@material-ui/core';

import {ThemeProvider} from '@material-ui/core/styles';

// components
import Home from './components/Home';

// theme
// #285f4e dark
// #3a8970 main
// #61a08c light

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#61a08c',
            main: '#3a8970',
            dark: '#285f4e',
        },
    },
});

const useStyles = makeStyles(theme => ({
    appContainer: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
}))

function App() {
    const classes = useStyles();

    return (
        <div className={classes.appContainer}>
            <ThemeProvider theme={theme}>
                <Home/>
            </ThemeProvider>
        </div>
    );
}

export default App;
