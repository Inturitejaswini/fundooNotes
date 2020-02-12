/******************************************************************************
* Execution : 1. default node cmd> node editLabels.jsx 
* 2. if nodemon installed cmd> nodemodule editLabels.jsx
* 
* Purpose : create editLabels page.
* @description 
* 
* @file :editLabels.jsx
* @overview :editLabels form problem.
* @module :editLabels - This is optional if expeclictly its an npm or local package
* @author :tejaswini<chowdarytejaswini2@gmail.com>
* @version :1.0
* @since :-2-02-2020
******************************************************************************/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton'
import { InputBase, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import LabelIcon from '@material-ui/icons/Label';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';
import CreateIcon from '@material-ui/icons/Create';
import {updateLabel} from '../controller/noteController'
import { getlabelscard } from '../controller/noteController'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
class Editlabels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteArray: [],
            open: false,
            key: "",
            label: "",
        }
    }
    handleNote = () => {
        this.setState({
            open: !this.state.open,
        })
    }
    componentDidMount = () => {
        this.getAllLables();
    }

    getAllLables = () => {
        getlabelscard()
            .then(res => {
                console.log("dataaaaaaa for labels", res);
                this.setState({
                    noteArray: res
                })
                console.log("noteData", this.state.noteArray)
            })

    }
    handleClear = () => {
        this.setState({
            title: ''
        })
    }
    handleLabel = (event) => {
        this.setState({ label: event.target.value });
        console.log('JGVBHVYHygvh', this.state.label)
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleupdate = (key) => {
        // console.log("gggggg--->", value);
        this.setState({
            // selectedValue: value, 
            open: false,
            label: this.state.label,
            key: key
        });
        console.log("response is coming to handle upade", this.state.label,this.state.key)
        let userData = {
            label: this.state.label,
            key: key
        }
        console.log("response is coming to handle upade", userData)
        updateLabel(userData).then((res) => {
            console.log("data is updated came to in get note component", res)
        })
    }
    render() {
        return (
            <div>
                <Button id="editlabelicon-btn" type="button" onClick={this.handleNote}>
                    <div id="edit-lables" title="edit labels">
                        <div id="editlabelicon"><EditOutlinedIcon />
                        </div>
                        <div className="editlabel2">Edit Lables</div>

                    </div></Button>
                <Dialog className="Dialog" aria-labelledby="simple-dialog-title" open={this.state.open}>
                    <div className="ghig">
                        <h3>Edit labels</h3>
                        <div><IconButton title="cancel"><ClearIcon onClick={this.handleClear}></ClearIcon></IconButton>

                            <TextField placeholder="create new label"></TextField>
                            <IconButton><DoneIcon title="create label"></DoneIcon></IconButton>
                        </div>
                        <div className="filled_label">
                            {this.state.noteArray.map(key => {
                                return (
                                    <div className="filled_label_icon">
                                        <div>
                                            <IconButton><LabelIcon/></IconButton>
                                            <InputBase className="filled_label_icon2"
                                             defaultValue={key.data().label} 
                                             onChange={this.handleLabel}>
                                            </InputBase></div>
                                        <div><IconButton onClick={() => this.handleupdate(key.id)}><CreateIcon/></IconButton></div>
                                    </div>
                                )
                            })}</div>
                       <Button> <div onClick={this.handleClose}>Close</div> </Button></div>
                </Dialog>
            </div>
        )
    }
}
export default withRouter(Editlabels)
