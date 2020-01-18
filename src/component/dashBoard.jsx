import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import RefreshIcon from '@material-ui/icons/Refresh'
import IconButton from '@material-ui/core/IconButton'
import AppsIcon from '@material-ui/icons/Apps';
import GoogleApp from '@material-ui/core'
import SearchBar from '@material-ui/icons/Search'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/icons/Input'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Typography from '@material-ui/core/Typography'
import image from '../assets/keep.jpeg';
import DrawerComponent from './drawerComponent';
import { AppBar, TextField,Grid,Avatar } from '@material-ui/core'

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState: "Search...",
            currentText: " "
        }
    }

    changeText(currentText) {
        this.setState({ currentText });
        //console.log({currentText});
    }
    render() {
        return (
            <div>
                <AppBar position="static" title="My App">
                    <Toolbar className="toolbar">
                        <div><button className="toggle-button">
                            <div className="toggle-button_line" />
                            <div className="toggle-button_line" />
                            <div className="toggle-button_line" />
                        </button>    </div>
                        <img className="fundooimage" src={image} />
                        <Typography variant="title" color="primary">
                            <h3 style={{ cursor: "pointer", marginLeft: "10px", marginDown: "10px" }}>Keep</h3>
                        </Typography>

                        <div class="search-box" style={{ marginLeft: "200px" }}>
                            <TextField id="outlined-basic" type="serach_icon" placeholder="search..." variant="outlined">
                                <IconButton>
                                    <SearchBar style={{ margin: '0 auto', maxWidth: "1000px", marginLeft: "20px" }} />
                                </IconButton>
                            </TextField>
                        </div>
                        <IconButton className="refersh" color="default" aria-label="open drawer" style={{ marginLeft: "550px" }}>
                            <RefreshIcon />
                        </IconButton>
                        <AppsIcon className="googleApps" color="default" aria-label="open drawer" style={{ marginLeft: "550px" }}>
                            <GoogleApp />
                        </AppsIcon>
                        <div className="acountIcon">
                            
                            <Grid className="grid" container justify="right" alignItems="right" style={{marginLeft:"400PX"}}>
                            <IconButton>
                                <Avatar className="account"></Avatar>
                            </IconButton>
                            </Grid>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default withRouter(Dashboard)