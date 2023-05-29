import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: theme.spacing(2),
        textAlign: 'center',
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
