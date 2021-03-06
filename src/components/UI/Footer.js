import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,Hidden } from "@material-ui/core";

import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.8rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "4em",
  },
  icon:{
    height:"4em",
    width:"4em",
    [theme.breakpoints.down("xs")]:{
      height:"2.5em",
      width:"2.5em",
    }
  },
  socialContainer:{
    position:"absolute",
    marginTop:"-6em",
    right:"1.5em",
    [theme.breakpoints.down("xs")]:{
      right:"0.6em"
    }
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  const { setValue, setSelectedIndex } = props;
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
      <Grid container justifyContent="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.link}
            >
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              component={Link}
              to="/services"
            >
              Services
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              to="/custom-software"
            >
              Custom Software Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              to="/mobile-apps"
            >
             iOS/Mobile App Development
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              The Revolution
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Vision
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Technology
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/revolution"
              onClick={() => setValue(2)}
            >
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              About Us
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              History
            </Grid>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/about"
              onClick={() => setValue(3)}
            >
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              className={classes.link}
              component={Link}
              to="/contact"
              onClick={() => setValue(4)}
            >
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <img
        alt="footer slash"
        src={footerAdornment}
        className={classes.adornment}
      ></img>
      <Grid container justifyContent="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="https://www.facebook.com/abhinavsiwal77/" rel="noopener noreferrer" target="_blank" >
          <img alt="Facebook Icon" src={facebook} className={classes.icon} />
          </Grid>
        <Grid item component={"a"} href="https://twitter.com/AbhinavSiwal" rel="noopener noreferrer" target="_blank">
          <img alt="Twitter Icon" src={twitter} className={classes.icon}/>
          </Grid>
        <Grid item component={"a"} href="https://www.instagram.com/abhinav_siwal8/" rel="noopener noreferrer" target="_blank">
          <img alt="Instagram Logo" src={instagram} className={classes.icon}/>
          </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
