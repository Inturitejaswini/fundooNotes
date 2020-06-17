
/******************************************************************************
* Execution : 1. default node cmd> node colorComponent.jsx 
* 2. if nodemon installed cmd> nodemodule colorComponent.jsx
* 
* Purpose : create colorComponent page.
* @description 
* 
* @file :colorComponent.jsx
* @overview :colorComponent form problem.
* @module :colorComponent - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-6-02-2020
******************************************************************************/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {Popper,IconButton,Paper,ClickAwayListener} from '@material-ui/core'
import ColorLensIcon from '@material-ui/icons/ColorLens';
import {Updatecolors} from '../controller/noteController'
const colors = [
    { name: "violet", hexcode: "#E6E6FA" },
    { name: "orange", hexcode: "#F47E3F" },
    { name: "skyblue", hexcode: "#AFEEEE" },
    { name: "yellow", hexcode: "#F4D03F" },
    { name: "golden", hexcode: "#EEE8AA" },
    { name: "pink", hexcode: "#F43FD6" },
    { name: "white", hexcode: "#ffffff" },
    { name: "darkseagreen", hexcode: "#D2B48C" },
    { name: "steelblue", hexcode: "#B0E0E6" },
    { name: "gray", hexcode: "#34495E" },
    { name: "lightorange", hexcode: "#BC8F8F" },
    { name: "violet", hexcode: "#E6E6FA" },
    { name: "salmon", hexcode: "#FFC0CB" },
    { name: "darkgreen", hexcode: "#196F3D" },
    { name: "blue", hexcode: "#423FF4" },
]
export class ColorComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            open: false,
            takeNote: "",
            checkBox: false,
            labelkey: "",
            label: "",
            color: "",
            openColorPallete:true,
        }
    }

    handlecolormenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleClickAway = () => {
        this.setState({
            anchorEl: null
        })
    }
    handleColor = (event) => {
        this.setState({
            color: event.target.value,
            key: this.props.noteId
        });
        let noteColor = {
            key: this.props.noteId,
            color: event.target.value
        }
        Updatecolors(noteColor).then((res) => {
        })
    }
    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        var colorList = colors.map((key) => {
            return (
                <IconButton style={{ backgroundColor: key.hexcode,width: "23px",
                    height: "22px" }}
                    value={key.name} onClick={this.handleColor}>
                </IconButton>
            )
        })
        return (
            <div className="colorcomponent-div">
                <IconButton className="colorlense"
                    aria-describedby={id} type="button" onClick={this.handlecolormenu}>
                    <div className="ColorLensIcon" title="more"><ColorLensIcon /></div>
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: "9999" }}>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <Paper className="colorlense-paper">
                        <div id="colorpaper" >
                           <div style={{fontSize:"large"}}>{colorList}</div> 
                        </div>
                    </Paper>
                    </ClickAwayListener>
                </Popper>
            </div>
        )
    }
}

export default withRouter(ColorComponent)

