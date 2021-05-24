import React from "react";
import SiteLinks from "../SiteLinks/SiteLinks";
import Image from "../Image/Image"
import "./MainNav.css";

// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

//Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/core/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// This snippet will let you use site links to display the menu
//<div class="menu-right"><SiteLinks config={config} labeled /></div>

function MainNav({ config }) {
  return (
    <AppBar className="main-nav" position="static">
      <Toolbar className="toolbar">
        <div class="menu-left"><Image width="240" src={config.siteLogo} /></div>
        <div class="menu-right"><Button size="medium" variant="contained" color="secondary" href="https://www.huckleberrysnaturalmarket.com/locations" link="https://www.huckleberrysnaturalmarket.com/locations" target="_blank">Visit Huckleberry’s Natural Market</Button></div>
      </Toolbar>
    </AppBar>
  );
}

export default MainNav;
