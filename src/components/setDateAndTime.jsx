import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Paper, Button, Popper, TextField, ClickAwayListener } from '@material-ui/core';
import 'date-fns';
import { remainder } from '../controller/noteController'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
export class SetDateAndTime extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            anchorEl: null,
            open: false,
            timeDate: "",
            key: "",
            defaultValue: "",
        }
    }
    handleClickAway = () => {
        this.setState({
            anchorEl: null
        })
    }
    handleTimeAndDate = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleClose1 = () => {
        this.setState({
            open: false
        })
    }
    handleDateChange = (event) => {
        this.setState({ timeDate: event.target.value });
    };
    handleValve = () => {
        let timeDetails = {
            timeDate: this.state.timeDate,
            key: this.props.remainderId
        }
        remainder(timeDetails).then((res) => {
            return res
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const setTimeDateId = open ? 'simple-popper' : undefined;
        return (
            <div>
                <Button id="time-date-btn"
                    aria-describedby={id} type="button" onClick={this.handleTimeAndDate}>
                    <div id="selecttime-div">
                        <AccessTimeIcon /> Select Date and Time</div>
                </Button>
                <Popper id={setTimeDateId} open={open} anchorEl={anchorEl}>
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <Paper className="datetime">
                            <div className="datepaper">
                                <TextField
                                    name="timeDate"
                                    type="datetime-local"
                                    format="MM/dd/yyyy,hr:min"
                                    value={this.state.timeDate}
                                    onChange={this.handleDateChange} />
                                <div className="btns-div">
                                    <Button className="cancel-btn">
                                        <div className="cancel-div" onClick={this.handleClose1}>
                                            Cancel
                                        </div>
                                    </Button>
                                    <Button className="save-btn">
                                        <div className="save-div" value={this.state.timeDate} onClick={this.handleValve}>
                                            Save
                                        </div>
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </ClickAwayListener>
                </Popper>
            </div >
        )
    }
}

export default withRouter(SetDateAndTime)
