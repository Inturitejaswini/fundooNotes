/******************************************************************************
* Execution : 1. default node cmd> node editLabel.jsx 
* 2. if nodemon installed cmd> nodemodule editLabel.jsx
* 
* Purpose : create editLabel page.
* @description 
* 
* @file :editLabel.jsx
* @overview :editLabel form problem.
* @module :editLabel - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-13-01-2020
******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Popper, Paper, Checkbox, Button, InputBase, ClickAwayListener } from '@material-ui/core'
import { createlabelnotes, getlabels, checkbox } from '../controller/noteController'
class Editlabel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            anchorEl: null,
            open: false,
            takeNote: "",
            checkBox: false,
            labelkey: "",
            label: "",
        }
    }
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handlechangetakeNote = (event) => {
        this.setState({ takeNote: event.target.value });
    }
    componentDidMount = () => {
        let details = {
            key: this.props.editlabel
        }
        getlabels(details).then(res => {
            this.setState({
                noteArray: res
            })
            this.state.noteArray.map((key) => {
            })
        })
        this.setState({
            open: false
        })
    }
    handleLabels = (title, takeNote, key, id) => {
        this.setState({
            title: title,
            open: !this.state.open,
            takeNote: takeNote,
            key: key,
            labelkey: id
        })
    }
    handleCheckbox = (label, key, id) => {
        this.setState({
            checkBox: this.state.checkBox,
            key: this.props.editlabel,
            labelkey: id
        });
        let createcheckbox = {
            checkBox: this.state.checkBox,
            key: this.props.editlabel,
            labelkey: id
        }
        checkbox(createcheckbox).then((res) => {
        })
    }
    handleLabelnote = () => {
        this.setState({
            takeNote: this.state.takeNote,
            key: this.props.editlabel,
            checkBox: this.state.checkBox
        });
        let createlabel = {
            takeNote: this.state.takeNote,
            key: this.props.editlabel,
            checkBox: this.state.checkBox
        }
        createlabelnotes(createlabel).then((res) => {
        })
        this.setState({
            open: false
        })
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
        var pinData = this.state.noteArray.map(key => {
            return (
                <div>
                    <div className="labelComponent">
                        <card>
                            <div id="label_note" onClick={() => this.handleLabels}>
                                <Checkbox onClick={() => this.handleCheckbox(key.data().label, key.data().key, key.id)} />
                                <InputBase placeholder="title" value={key.data().label} />
                            </div>
                        </card>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div>
                    <Button className="editLabelComponent"
                        aria-describedby={id} type="button">
                        <div className="editLabelComponent1" title="editLabel" onClick={this.handlemoremenu}>add label</div></Button>
                    <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: "9999" }}>
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <Paper className="more-paper1">
                                <h6>edit label</h6>
                                <InputBase placeholder="enter label name" value={this.state.takeNote} onChange={this.handlechangetakeNote} ></InputBase>
                                <button onClick={this.handleLabelnote}>close</button>
                            </Paper>
                        </ClickAwayListener>
                    </Popper>
                </div>
                {pinData}</div>
        )
    }
}

export default withRouter(Editlabel)