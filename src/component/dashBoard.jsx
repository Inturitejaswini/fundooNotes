import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import RefreshIcon from '@material-ui/icons/Refresh'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, InputBase } from '@material-ui/core';
import SearchBar from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import image from '../assets/keep.jpeg';
import DrawerComponent from '../component/drawerComponent'
import DrawerMenu from '@material-ui/core/Drawer'
import { AppBar,Input, Grid, Avatar } from '@material-ui/core'
const Theme=createMuiTheme({
    overrides:{
        MuiAppBar:{
            colorPrimary: {
                color: "rgba(0, 0, 0, 0.87)",
                backgroundColor:" white"
        }
     },
    MuiOutlinedInput :{
    padding: "18.5px 14px",
    width: "500px",
    height: "3px"
    }
    },
})
export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " ",
            anchorEl: null,
            open: false
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
      handlerefreshPage=()=>{
         window.location.reload(false);
      }
    
    render() {
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

                        <div className="searchBox" title="searchBox" backgroundColor="E6E6FA">   
                       <Input className="input-text"
                        type="searchIcon"
                        placeholder="search.." style={{marginLeft:"100px"}} />               
                        </div>
                        <div className="searchIcon" title="search">
                        <a href="#"> <SearchIcon /><i class="fa fa-search"></i></a>    
                        </div>
                        <div>
                        <IconButton className="refersh"
                            title="Refresh"
                            color="default"
                            aria-label="open drawer"
                            style={{ marginLeft: "30px" }}
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
                                <IconButton>
                                    <Avatar className="account"></Avatar>
                                </IconButton>
                            </Grid>
                        </div>
                    <DrawerComponent
                     open={this.state.open} />
                 </Toolbar>
                 </AppBar>
            </div>
        )
    }
}
export default withRouter(Dashboard)