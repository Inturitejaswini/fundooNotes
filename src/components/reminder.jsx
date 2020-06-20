
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
import { Popper, IconButton, Paper, Button } from '@material-ui/core'
import { Setdateandtime } from '../components/setDateAndTime'
import 'date-fns';
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
    };
    handleTimeChange = (event) => {
        this.setState({ selectedTime: event.target.value });
    };
    handleReminderMenu = (event) => {
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
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const reminderId = open ? 'simple-popper' : undefined;
        return (
            <div>
                <IconButton className="AddAlert"
                    aria-describedby={id} type="button" onClick={this.handleReminderMenu}>
                    <div className="AddAlertIcon" title="more"><AddAlertIcon /></div>
                </IconButton>
                <Popper id={reminderId} open={open} anchorEl={anchorEl} className="reminder-popper-paper">
                    <Paper className="reminder-paper">
                        <div className="reminder-div">
                            Reminder:
                            </div>
                        <div id="remainder-div-btns">
                            <Setdateandtime
                                remainderId={this.props.noteId}>
                            </Setdateandtime>
                        </div>
                    </Paper>
                </Popper>
            </div>
        )
    }
}

export default withRouter(Reminder)
