import { Button, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2rem"
    },
    logoLink: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    logo: {
        width: "250px"
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tabMenu: {
        ...theme.typography.tab,        
        minWidth: 10,
        marginLeft: "24px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        color: "#ffffff",
    }
}));

const HideOnScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
const Headar = (props) => {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        if(window.location.pathname === '/' && value !== 0) {
            setValue(0)
        } else if(window.location.pathname === '/services' && value !== 1) {
            setValue(1)
        } else if(window.location.pathname === '/revolution' && value !== 2) {
            setValue(2)
        }
    }, [value]);

    const handleChange = (event, index) => {
        setValue(index);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true)
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false)
    };

    return (
        <>
        <HideOnScroll>
            <AppBar position="fixed">
                <Toolbar disableGutters>
                    <Button component={Link} to="/" className={classes.logoLink} onClick={() => setValue(0)} disableRipple>
                        <img src={logo} className={classes.logo} alt="Dev" />
                    </Button>
                    
                    <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                        <Tab className={classes.tabMenu} component={Link} to="/" label="Home" />
                        <Tab 
                            className={classes.tabMenu} 
                            component={Link} 
                            to="/services" 
                            label="Services"
                            aria-owns={anchorEl ? 'simple-menu' : undefined}
                            aria-haspopup={anchorEl ? true : undefined}
                            onClick={e => handleClick(e)}
                             />
                        <Tab className={classes.tabMenu} component={Link} to="/revolution" label="The Revolution" />
                        <Tab className={classes.tabMenu} component={Link} to="/about" label="About Us" />
                        <Tab className={classes.tabMenu} component={Link} to="/contact" label="Contact" />
                    </Tabs>

                    <Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>

                    <Menu 
                        id="simple-menu" 
                        anchorEl={anchorEl} 
                        open={open} onClose={handleClose}
                        MenuListProps={{onMouseLeave: handleClose}}
                        >
                        <MenuItem onClick={handleClose}>Custom Software Development</MenuItem>
                        <MenuItem onClick={handleClose}>Mobile App Development</MenuItem>
                        <MenuItem onClick={handleClose}>Website Development</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </HideOnScroll>

        <div className={classes.toolbarMargin}>Hello</div>
        </>
    )
}

export default Headar
