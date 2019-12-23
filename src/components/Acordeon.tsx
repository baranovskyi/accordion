import React from "react";
import "./styles/acordeon.css";
import { mapState } from "./container";
import { connect } from "react-redux";
import { Item } from "../state/model/types";
class Acordeon extends React.Component<{ items: Item }> {
  render() {
    return (
      <div className="acordeon">
        {Object.keys(this.props.items).map((item: string, index: number) => {
          return (
            <div className="item" key={item}>
              <div className="item-name">
                <h3>{this.props.items[`item-${index}`].item_name}</h3>
              </div>
              <div className="item-description">
                <p>{this.props.items[`item-${index}`].item_description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default connect(mapState)(Acordeon);
