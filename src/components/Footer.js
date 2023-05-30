import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: theme.spacing(2),
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="body2">&copy; 2023 My App. All rights reserved.</Typography>
        </footer>
    );
};

export default Footer;