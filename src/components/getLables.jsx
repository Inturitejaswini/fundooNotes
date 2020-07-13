import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { InputBase, Button } from "@material-ui/core";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { getLabelsCard } from "../controller/noteController";
class GetLabels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      anchorEl: null,
      open: false,
      delete: false,
      key: "",
      label: "",
    };
  }
  componentDidMount = () => {
    this.getAllLables();
  };
  getAllLables = () => {
    getLabelsCard().then((res) => {
      this.setState({
        noteArray: res,
      });
    });
  };
  handleComponet = (label) => {
    this.props.history.push("/label", label);
  };
  render() {
    let pinData = this.state.noteArray.map((key1) => {
      return (
        <div className="getting_labels_inDrawercomponent">
          <Button id="abcd" onClick={this.handleGetNotes}>
            <LabelOutlinedIcon className="labelbtnicon" />
            <InputBase
              id="labelssize"
              value={key1.data().label}
              onClick={() => this.handleComponet(key1.data().label)}
            />
          </Button>
        </div>
      );
    });
    return <div>{pinData}</div>;
  }
}
export default withRouter(GetLabels);
