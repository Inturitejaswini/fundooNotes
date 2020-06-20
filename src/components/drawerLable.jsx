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
import { createLabelNotes, getLabels, checkBox } from '../controller/noteController'
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
    handleMoreMenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleChangeTakeNote = (event) => {
        this.setState({ takeNote: event.target.value });
    }
    componentDidMount = () => {
        let details = {
            key: this.props.editlabel
        }
        getLabels(details).then(res => {
            this.setState({
                noteArray: res
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
    handleCheckBox = (label, key, id) => {
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
        checkBox(createcheckbox).then((res) => {
            return res
        })
    }
    handleLabelNote = () => {
        this.setState({
            takeNote: this.state.takeNote,
            key: this.props.editlabel,
            checkBox: this.state.checkBox
        });
        let createLabel = {
            takeNote: this.state.takeNote,
            key: this.props.editlabel,
            checkBox: this.state.checkBox
        }
        createLabelNotes(createLabel).then((res) => {
        return res
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
        const drawerId = open ? 'simple-popper' : undefined;
        let pinData = this.state.noteArray.map(key => {
            return (
                <div>
                    <div className="labelComponent">
                        <card>
                            <div id="label_note" onClick={() => this.handleLabels}>
                                <Checkbox onClick={() => this.handleCheckBox(key.data().label, key.data().key, key.id)} />
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
                        <div className="editLabelComponent-div" title="editLabel" onClick={this.handleMoreMenu}>add label</div></Button>
                    <Popper id={drawerId} open={open} anchorEl={anchorEl}>
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <Paper className="more-paper">
                                <h6>edit label</h6>
                                <InputBase placeholder="enter label name" value={this.state.takeNote} onChange={this.handleChangeTakeNote} ></InputBase>
                                <button onClick={this.handleLabelNote}>close</button>
                            </Paper>
                        </ClickAwayListener>
                    </Popper>
                </div>
                {pinData}</div>
        )
    }
}

export default withRouter(Editlabel)
