import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1em",
    },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity:0.7,
  },
  drawerItemSelected:{
    "& .MuiListItemText-root":{
      opacity:1,
    }
  },
  drawerItemEstimate:{
    backgroundColor:theme.palette.common.orange,
  },
  appbar:{
    zIndex:theme.zIndex.modal+1,
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
 
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const {value,setValue,selectedIndex,setSelectedIndex} = props;

  const changeHandler = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/custom-software" },
    { name: "Mobile App Development", link: "/mobile-apps" },
    { name: "Website Development", link: "/websites" },
  ];

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  useEffect(() => {
    switch (window.location.pathname) {
      case "/": {
        if (value !== 0) {
          setValue(0);
        }
        break;
      }
      case "/services": {
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      }
      case "/custom-software": {
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      }
      case "/mobile-apps": {
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      }
      case "/websites": {
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      }
      case "/revolution": {
        if (value !== 2) {
          setValue(2);
        }
        break;
      }
      case "/about": {
        if (value !== 3) {
          setValue(3);
        }
        break;
      }
      case "/contact": {
        if (value !== 4) {
          setValue(4);
        }
        break;
      }
      case "/estimate": {
        if (value !== 5) {
          setValue(5);
        }
        break;
      }
      default:
        break;
    }
  }, [value,setSelectedIndex,setValue]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={changeHandler}
        className={classes.tabContainer}
        indicatorColor="secondary"
      >
        <Tab label="Home" className={classes.tab} component={Link} to="/" />
        <Tab
          label="Services"
          className={classes.tab}
          component={Link}
          to="/services"
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)}
        />
        <Tab
          label="Revolution"
          className={classes.tab}
          component={Link}
          to="/revolution"
        />
        <Tab
          label="About Us"
          className={classes.tab}
          component={Link}
          to="/about"
        />
        <Tab
          label="Contact Us"
          className={classes.tab}
          component={Link}
          to="/contact"
        />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to="/estimate"
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        // openMenu={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{zIndex:1302}}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}+${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}/>
        <List disablePadding>
          <ListItem
            divider
            button
            component={Link}
            to="/"
            onClick={() => {setOpenDrawer(false);setValue(0)}}
            selected={value===0}
            classes={{selected:classes.drawerItemSelected}}
            >
            <ListItemText className={classes.drawerItem} disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/services"
            onClick={() => {setOpenDrawer(false);setValue(1)}}
            selected={value===1}
            >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/revolution"
            onClick={() => {setOpenDrawer(false);setValue(2)}}
            selected={value===2}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/about"
            onClick={() => {setOpenDrawer(false);setValue(3)}}
            selected={value===3}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/contact"
            onClick={() => {setOpenDrawer(false);setValue(4)}}
            selected={value===4}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem>
          <ListItem
            divider
            button
            component={Link}
            to="/estimate"
            className={classes.drawerItemEstimate}
            onClick={() => {setOpenDrawer(false);setValue(5)}}
            selected={value===5}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => {
                setValue(0);
              }}
              disableRipple
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
