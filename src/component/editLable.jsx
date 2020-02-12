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
import Popper from '@material-ui/core/Popper'
import { Paper } from '@material-ui/core';
import { createlabelnotes } from '../controller/noteController'
import { getlabels } from '../controller/noteController'
import Checkbox from '@material-ui/core/Checkbox';
import { checkbox } from '../controller/noteController'
import { Button, InputBase } from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
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
        console.log("taking notes", event);

        this.setState({ takeNote: event.target.value });
        // console.log("taking notes",this.state.takeNote);
    }
    componentDidMount = () => {
        let details = {
            key: this.props.editlabel
        }
        getlabels(details)
            // console.log("key is coming in edit label", details.key)
            .then(res => {
                console.log("dataaaaaaa", res);
                this.setState({
                    noteArray: res
                })
                console.log("noteData", this.state.noteArray)
                this.state.noteArray.map((key) => {
                    console.log(key.label, "labels are coming",key)
                })
            })
        this.setState({
            open: false
        })
    }
    handleLabels = async (title, takeNote, key, id) => {
        //console.log("id in get",key);
        await this.setState({
            title: title,
            open: !this.state.open,
            takeNote: takeNote,
            key: key,
            labelkey: id
        })
        // console.log("taking title", this.state.title,this.state.takeNote,this.state.key);
    }
    handleCheckbox = (label, key, id) => {
        this.setState({
            checkBox: this.state.checkBox,
            key: this.props.editlabel,
            labelkey: id
        });
        console.log("response is coming to handle checkbox", this.props.editlabel, this.state.checkBox)
        //this.props.labelProps()
        let createcheckbox = {
            checkBox: this.state.checkBox,
            key: this.props.editlabel,
            labelkey: id
        }
        console.log("response is coming to handle checkbox", this.state.checkBox)
        checkbox(createcheckbox).then((res) => {
            console.log("data is updated came to in get note component", res)
        })
    }
    handleLabelnote = () => {
        console.log("gggggg--->");
        this.setState({
            takeNote: this.state.takeNote,
            key: this.props.editlabel,
            checkBox: this.state.checkBox
        });
        console.log("response is coming to handle editlabel note", this.props.editlabel, this.state.takeNote)
        let createlabel = {
            takeNote: this.state.takeNote,
            key: this.props.editlabel,
            checkBox: this.state.checkBox
        }
        console.log("response is coming to handle upade", createlabel.key)
        createlabelnotes(createlabel).then((res) => {
            console.log("data is updated came to in get note component", res)
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
        console.log("key is coming in edit label", this.props.editlabel)
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        var pinData = this.state.noteArray.map(key => {
            console.log("dataaaaa-in key----->", key.id, key.data().label);
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
