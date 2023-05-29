import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#333',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        backgroundColor: '#f5f5f5',
    },
}));

const Home = () => (
    <div className='my-4'>
        <h2 className='home'>Home</h2>
        <p>Welcome to the Home page.</p>
    </div>
);

const About = () => (
    <div>
        <h2 className='about'>About</h2>
        <p>Welcome to the About page.</p>
    </div>
);

const Contact = () => (
    <div>
        <h2 className='contact'>Contact</h2>
        <p>Welcome to the Contact page.</p>
    </div>
);

const Navbar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Router>
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            My App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div>
                        <IconButton onClick={handleDrawerClose}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/about">
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem button component={Link} to="/contact">
                            <ListItemText primary="Contact" />
                        </ListItem>
                    </List>
                </Drawer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>
        </Router>
    );
};

export default Navbar;
