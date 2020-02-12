
/******************************************************************************
* Execution : 1. default node cmd> node gettingRemainder.jsx 
* 2. if nodemon installed cmd> nodemodule gettingRemainder.jsx
* 
* Purpose : create gettingRemainder page.
* @description 
* 
* @file :gettingRemainder.jsx
* @overview :gettingRemainder form problem.
* @module :gettingRemainder - This is optional if expeclictly its an npm or local package
* @author :sravanthi<sravanthiakula15@gmail.com>
* @version :1.0
* @since :-20-01-2020
******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Popper from '@material-ui/core/Popper'
import IconButton from '@material-ui/core/IconButton'
import { Paper} from '@material-ui/core';
import { Setdateandtime } from '../component/setDateAndTime'
import 'date-fns';
import { Button } from '@material-ui/core';
import AddAlertIcon from '@material-ui/icons/AddAlert';
export class Reminder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            anchorEl: null,
            open: false,
        }
    }
    handleDateChange = (event) => {
        this.setState({ selectedDate: event.target.value });
        console.log("date", this.state.selectedDate);
    };
    handleTimeChange = (event) => {
        this.setState({ selectedTime: event.target.value });
        console.log("time", this.state.selectedTime);
    };
    handleremindermenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleClickAway = () => {
        this.setState({
            anchorEl: null
        })
    }
    handleTimeAndDate = () => {
        const user = {
            selectedDate: this.state.selectedDate,
            selectedTime: this.state.selectedTime,
        }
    }
    render() {
        console.log("ytgfcycvtyhftyhfvy", this.props.noteId)
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>
                <IconButton className="AddAlert"
                    aria-describedby={id} type="button" onClick={this.handleremindermenu}>
                    <div className="AddAlertIcon" title="more"><AddAlertIcon /></div>
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} style={{zIndex:"9999"}}>
                    <Paper className="reminder-paper">

                        <div className="reminder-div">
                            Reminder:
                            </div>
                            <div id="remainder-div-btns">
                        {/* <Button id="button1">
                            <div className="today">
                                Later today</div>
                        </Button>
                        <Button id="button1">
                            <div className="Tomarrow1">
                                Tomarrow</div>
                        </Button> */}
                        <Setdateandtime
                            remainderId={this.props.noteId}></Setdateandtime>
                            </div>
                    </Paper>
                </Popper>
            </div>
        )
    }
}

export default withRouter(Reminder)
