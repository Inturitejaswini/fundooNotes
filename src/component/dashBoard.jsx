/******************************************************************************
 *  Execution       :   1. default node         cmd> node dashBoard.jsx 
 *                      2. if nodemon installed cmd> nodemodule dashBoard.jsx
 * 
 *  Purpose         : creating dashboard application page.
 *  @description    
 * 
 *  @file           :dashBoard.jsx
 *  @overview       : creating dashBoard page.
 *  @module         :dashBoard - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :14-1-2019
 ******************************************************************************/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import RefreshIcon from '@material-ui/icons/Refresh'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import { createMuiTheme, Paper } from '@material-ui/core';
import Popper from '@material-ui/core/Popper'
import Notes from '../component/notes'
import Getnotes from '../component/getNote'
import { MuiThemeProvider } from '@material-ui/core';
import ViewStreamRoundedIcon from '@material-ui/icons/ViewStreamRounded';
import Typography from '@material-ui/core/Typography'
import image from '../assets/keep.jpeg';
import DrawerComponent from '../component/drawerComponent'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { AppBar, InputBase, Grid, Avatar, Divider, Button } from '@material-ui/core'
const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: " white"
            }
        },
        // MuiAppBar: {
        //     root: {
        //         width: "169 %",
        //         display: "flex",
        //         zindex: "1100",
        //         boxsizing: "border- box",
        //         flexshrink: "0",
        //         flexdirection: "column",
        //     }
        // },
        MuiIconButton: {
            root: {
                padding: "6PX",
                fontSize: "0.5em"
            }
        },
        MuiOutlinedInput: {
            padding: "18.5px 14px",
            width: "px",
            height: "3px"
        }
    },
    // MuiButtontextSizeSmall: {
    //     padding: "4px 5px",
    //     fontsize: "0.8125rem",
    //     margintop: "142px",
    // }
})
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " ",
            anchorEl: null,
            open: false,
            openn: false,
            profileOpen: false
        }
    }
    handleLabel = () => {
        this.setState({
            openn: true
        })
    }
    handleLabels = () => {
        this.setState({
            openn: false
        })
    }

    changeText(currentText) {
        this.setState({ currentText });
        //console.log({currentText});
    }
    handlenavigationbar = () => {
        console.log("enter into navigation bar")
        // this.props.history.push('/drawerComponent')
        this.setState({
            open: !this.state.open
        })
        console.log("open log in dashboard", this.state.open);

    }
    handlerefreshPage = () => {
        window.location.reload(false);
    }
    handleprofilemenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handlesignout = (event) => {
        this.props.history.push('/login')
    }
    handleClickAway = () => {
        this.setState({
            anchorEl: null
        })
    }

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div id="dashboard-appbar">
                <MuiThemeProvider theme={theme}>
                    <AppBar position="static" title="My App" className="appbar-class">
                        <Toolbar className="toolbar" title="mainMenu">
                            <div>
                                <IconButton edge="start"
                                    className="menuButton"
                                    color="primary"
                                    aria-label="menu"
                                    onClick={this.handlenavigationbar} >
                                    <MenuIcon />
                                </IconButton>
                                <h3 style={{ cursor: "pointer", marginLeft: "10px", margin: "5px" }}></h3>
                            </div>
                            <img className="fundooimage" src={image} />
                            <Typography variant="title"
                                color="textPrimary"
                                title="Fundoonotes">
                                <h3 style={{ cursor: "pointer", marginLeft: "10px", marginDown: "10px" }}>FundooNote</h3>
                            </Typography>
                            <div className="search_box">
                                <div className="searchIcon">
                                    <SearchIcon />
                                </div>
                                <div>
                                    <InputBase className="input-text"
                                        type="searchIcon"
                                        placeholder="search.." />
                                </div>
                            </div>
                            <div className="Icons" display="flex">
                                <IconButton className="refersh"
                                    title="Refresh"
                                    color="default"
                                    aria-label="open drawer"
                                    style={{ marginLeft: "5px" }}
                                    onClick={this.handlerefreshPage}>
                                    <RefreshIcon />
                                </IconButton>
                                {!this.state.openn ? (
                                    <div>
                                        <IconButton className="gridview"
                                            title="listview"
                                            color="default"
                                            style={{ marginLeft: "20px" }}
                                            onClick={this.handleLabel}>
                                            <ViewColumnIcon />
                                        </IconButton>
                                    </div>
                                ) : (
                                        <div>
                                            <IconButton className="gridview"
                                                title="listview"
                                                color="default"
                                                onClick={this.handleLabels}>
                                                <ViewStreamRoundedIcon />
                                            </IconButton>
                                        </div>)}
                                <IconButton className="settings"
                                    title="Settings"
                                    color="default"
                                    aria-label="open drawer"
                                    style={{ marginLeft: "40px" }}>
                                    <SettingsIcon />
                                </IconButton>
                                <IconButton className="googleApps"
                                    title="googleApps"
                                    color="default"
                                    aria-label="open drawer"
                                    alignItems="center"
                                    style={{ marginLeft: "40px" }}>
                                    <AppsIcon />
                                </IconButton>
                            </div>
                            <div className="acountIcon">
                                <Grid className="grid"
                                    title="googleAccount"
                                    justify-container="center"
                                    alignItems="right"
                                    style={{ marginLeft: "20PX" }}>
                                    <IconButton aria-describedby={id} type="button" onClick={this.handleprofilemenu}>
                                        <Avatar className="account">
                                        </Avatar>
                                    </IconButton>
                                    <Popper id={id} open={open} anchorEl={anchorEl}>
                                        <ClickAwayListener onClickAway={this.handleClickAway}>
                                            <Paper className="profile-paper">
                                                <div className="profilepage">
                                                    <div>
                                                        <h5>
                                                            <IconButton>
                                                                <Avatar className="account" style={{ cursor: "pointer" }}>
                                                                </Avatar>
                                                            </IconButton>
                                                        </h5>
                                                        <Button className="manageaccount">
                                                            <div id="manage-div-btn">
                                                                Manage your googleAccount
                                                    </div>
                                                        </Button>
                                                        <Divider type='horizontal' />
                                                        <div className="account-btn">
                                                            <div className="account">
                                                                <Button id="acnt-div-btn">
                                                                    <div className="accounticon" ><PersonAddIcon /></div>
                                                                    <div className="accounttext" title="notes">Add another account</div>
                                                                </Button>
                                                            </div>
                                                            <Divider type='horizontal' />
                                                            <div>
                                                                <Button size="small" color="primary" onClick={this.handlesignout} id="signout-btn">
                                                                    <div id="div-sign">
                                                                        Sign out
                                                            </div>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </Paper>
                                        </ClickAwayListener>
                                    </Popper>

                                </Grid>
                            </div>
                            <DrawerComponent className="adcgd"
                                open={this.state.open} />
                        </Toolbar>
                    </AppBar>
                    <Notes />
                    <Getnotes listId={this.state.openn} className="getnote-divcard">
                    </Getnotes>
                </MuiThemeProvider>
            </div >
        )
    }
}
export default withRouter(Dashboard)