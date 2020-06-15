import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Paper, Button ,Popper,TextField,ClickAwayListener} from '@material-ui/core';
import 'date-fns';
import { remainder } from '../controller/noteController'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
export class Setdateandtime extends Component {
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
    handleclose1 = () => {
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
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>
                <Button id="button0" className="adasgfd"
                    aria-describedby={id} type="button" onClick={this.handleTimeAndDate}>
                    <div id="selecttime-div">
                        <AccessTimeIcon /> Select Date and Time</div>
                </Button>
                <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: "9999" }} >
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <Paper className="datetime">
                            <div className="datepaper">
                                <TextField
                                    name="timeDate"
                                    type="datetime-local"
                                    format="MM/dd/yyyy,hr:min"
                                    value={this.state.timeDate}
                                    onChange={this.handleDateChange}
                                />
                                <div className="btns-div">
                                    <Button className="cancel-btn1">
                                        <div className="mnb" onClick={this.handleclose1}>
                                            Cancel
                                        </div>
                                    </Button>
                                    <Button className="save-btn">
                                        <div className="hfg" value={this.state.timeDate} onClick={this.handleValve}>
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

export default withRouter(Setdateandtime)