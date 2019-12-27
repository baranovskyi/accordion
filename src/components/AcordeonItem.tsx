import React, { SyntheticEvent } from "react";
import "./styles/acordeon.css";
import { mapState } from "./container";
import { connect } from "react-redux";
import { State, ItemType } from "../state/model/types";

class AcordeonItem extends React.Component<{ item: ItemType }, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      cardHeader: "item-name",
      cardBody: "item-description none"
    };
  }

  handleStyle = () => {
    this.state.cardHeader.indexOf("active") === -1
      ? this.setState(state => ({
          cardHeader: `${state.cardHeader} active`,
          cardBody: state.cardBody.replace("none", "")
        }))
      : this.setState(state => ({
          cardHeader: state.cardHeader.replace(" active", ""),
          cardBody: `${state.cardBody}none`
        }));
  };
  render() {
    return (
      // <div className="acordeon">
      <div className="item">
        <div className={this.state.cardHeader} onClick={this.handleStyle}>
          <h3>{this.props.item.item_name}</h3>
        </div>
        <div className={this.state.cardBody}>
          <p>{this.props.item.item_description}</p>
        </div>
      </div>
      // </div>
    );
  }
}
export default AcordeonItem;
