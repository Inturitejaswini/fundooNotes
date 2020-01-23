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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchBar from '@material-ui/icons/Search'
import Notes from '../component/notes'
import Typography from '@material-ui/core/Typography'
import image from '../assets/keep.jpeg';
import DrawerComponent from '../component/drawerComponent'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DrawerMenu from '@material-ui/core/Drawer'
import { AppBar, InputBase, Grid, Avatar, Divider, Button } from '@material-ui/core'
const Theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor: " white"
            }
        },
        MuiOutlinedInput: {
            padding: "18.5px 14px",
            width: "500px",
            height: "3px"
        }
    },
    MuiButtontextSizeSmall: {
        padding: "4px 5px",
        fontsize: "0.8125rem",
        margintop: "142px",
    }
})
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " ",
            anchorEl: null,
            open: false,
            profileOpen: false
        }
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
    

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>

                <AppBar position="static" title="My App">
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
                            title="Googlekeep">
                            <h3 style={{ cursor: "pointer", marginLeft: "10px", marginDown: "10px" }}>Keep</h3>
                        </Typography>
                        <div className="search_box">
                            <div>
                                <InputBase className="input-text"
                                    type="searchIcon"
                                    placeholder="search.." />
                            </div>
                            <div className="searchIcon">
                                <SearchIcon />
                                </div>
                              </div>
                        <div>
                            <IconButton className="refersh"
                                title="Refresh"
                                color="default"
                                aria-label="open drawer"
                                style={{ marginLeft: "5px" }}
                                onClick={this.handlerefreshPage}>
                                <RefreshIcon />
                            </IconButton>
                            <IconButton className="gridView"
                                title="ListView"
                                color="default"
                                aria-label="open drawer"
                                style={{ marginLeft: "20px" }}>
                                <ViewColumnIcon />
                            </IconButton>
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
                                    <Paper className="profile-paper">
                                        <div className="profilepage">

                                            <div>
                                                <h5>
                                                    <IconButton>
                                                        <Avatar className="account" style={{ cursor: "pointer" }}></Avatar>
                                                    </IconButton>
                                                </h5>
                                                <Button className="manageaccount">
                                                    Manage your googleAccount
                                                </Button>
                                                <Divider type='horizontal' />
                                                <div className="account-btn">
                                                    <div className="account" style={{ display: "flex", marginBottom: "50px" }}>

                                                        <Button>
                                                            <div className="accounticon" style={{ marginRight: "10px" }}><PersonAddIcon /></div>
                                                            <div className="accounttext" title="notes">Add another account</div>
                                                        </Button>

                                                    </div>
                                                    <Divider type='horizontal' />
                                                    <div>
                                                        <Button size="small" color="primary" onClick={this.handlesignout} >
                                                            Sign out
                                                               </Button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </Paper>
                                </Popper>

                            </Grid>
                        </div>
                        <DrawerComponent
                            open={this.state.open} />
                    </Toolbar>
                </AppBar>
                <Notes/>
            </div >
        )
    }
}
export default withRouter(Dashboard)