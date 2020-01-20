import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import RefreshIcon from '@material-ui/icons/Refresh'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps';
import SettingsIcon from '@material-ui/icons/Settings';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import image from '../assets/keep.jpeg';
import DrawerComponent from '../component/drawerComponent'
import DrawerMenu from '@material-ui/core/Drawer'
import { AppBar, TextField, Grid, Avatar } from '@material-ui/core'

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
                        onClick={this.handlenavigationbar}>
                       <MenuIcon />
                       </IconButton>
                     <h3 style={{ cursor: "pointer", marginLeft: "10px", margin: "5px" }}></h3>
                     </div>
                        <img className="fundooimage" src={image} />
                        <Typography variant="title"
                         color="primary" 
                         title="Googlekeep">
                            <h3 style={{ cursor: "pointer", marginLeft: "10px", marginDown: "10px" }}>Keep</h3>
                        </Typography>

                        <div class="search-box" 
                        style={{ marginLeft: "200px"}}>
                            <TextField id="outlined-basic" 
                            type="serach_icon" 
                            placeholder="search..." 
                            variant="outlined">
                                <IconButton>
                                    <SearchBar style={{ margin: '0 auto', maxWidth: "1000px", marginLeft: "20px" }} />
                                </IconButton>
                            </TextField>
                        </div>
                        <div>
                        <IconButton className="refersh"
                            position="static"
                            title="Refresh"
                            color="default"
                            aria-label="open drawer"
                            style={{ marginLeft: "750px" }}>
                            <RefreshIcon />
                        </IconButton>
                        <IconButton className="gridView"
                            position="static"
                            title="ListView"
                            color="default"
                            aria-label="open drawer"
                            style={{ marginLeft: "10px" }}>
                            <ViewColumnIcon />
                        </IconButton>
                        <IconButton className="settings"
                            position="static"
                            title="Settings"
                            color="default"
                            aria-label="open drawer"
                            style={{ marginLeft: "40px" }}>
                            <SettingsIcon />
                        </IconButton>
                        <IconButton className="googleApps"
                            position="static"
                            title="googleApps"
                            color="default"
                            aria-label="open drawer"
                            style={{ marginLeft: "40px" }}>
                            <AppsIcon />
                        </IconButton>
                        </div>
                        <div className="acountIcon">
                            <Grid className="grid"
                                 position="static"
                                title="googleAccount"
                                container justify="right"
                                alignItems="right"
                                style={{ marginLeft: "30PX" }}>
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