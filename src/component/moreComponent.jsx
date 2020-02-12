
/******************************************************************************
 *  Execution       :   1. default node         cmd> node moreComponent.jsx 
 *                      2. if nodemon installed cmd> nodemodule moreComponent.jsx
 * 
 *  Purpose         : creating moreComponent card.
 *  @description    
 * 
 *  @file           :moreComponent.jsx
 *  @overview       : creating moreComponent problem.
 *  @module         :getNote - This is optional if expeclictly its an npm or local package
 *  @author         :Tejaswini<chowdarytejaswini2@gmail.com>
 *  @version        :1.0
 *  @since          :28-1-2019
 ******************************************************************************/

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Popper from '@material-ui/core/Popper'
import IconButton from '@material-ui/core/IconButton'
import { Paper} from '@material-ui/core';
import { Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {deleteNotes} from '../controller/noteController'
import Editlabel from '../component/editLable'
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
export class MoreComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            anchorEl: null,
            open: false,
            delete: false,
            key:""
        }
    }
    handlemoremenu = (event) => {
        this.setState({
            anchorEl: (this.state.anchorEl ? null : event.currentTarget)
        })
    }
    handleDelete = () => {
        console.log("data come to delete function",this.props.noteId);
        this.setState({
        open: false,
        delete: this.state.delete,
        key: this.props.noteId
        });
        console.log("response is coming to handle delete",this.props.noteId,this.state.delete)
        let delete1 = {
        key: this.props.noteId,
        delete: this.state.delete
        }
        console.log("response is coming to handle delete",delete1)
        deleteNotes(delete1).then((res) => {
        console.log("data is deleted came to in get note component", res)
        })
        }
    render() {
        console.log("key is coming to more component",this.props.noteId)
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        return (
            <div>
                <IconButton className="morevert"
                    aria-describedby={id} type="button" onClick={this.handlemoremenu}>
                    <div className="moreverticon" title="more"><MoreVertIcon /></div>
                </IconButton>
                <Popper id={id} open={open} anchorEl={anchorEl} style={{zIndex:"9999"}}>
                    <Paper className="more-paper">
                        <Button id="lablebutton1">
                            <div className="delete" onClick={this.handleDelete}>
                                Delete note</div>
                        </Button>
                       <Editlabel
                       editlabel={this.props.noteId}></Editlabel>
                        <Button id="lablebutton3">
                            <div className="adddrawing">
                                Add drawing</div>
                        </Button>
                    </Paper>
                </Popper>
            </div>
        )
    }
}

export default withRouter(MoreComponent)
