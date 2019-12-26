import React, { SyntheticEvent } from "react";
import "./styles/acordeon.css";
import { mapState } from "./container";
import { connect } from "react-redux";
import { Item } from "../state/model/types";
type State = {
  cardHeader: string;
};
let statusBtn: string;
let check: number = 0;
class Acordeon extends React.Component<{ items: Item }, State> {
  state = {
    cardHeader: "item-name"
  };
  handleStyle = (e: SyntheticEvent) => {
    statusBtn = e.currentTarget.id;
    check += 1;
    console.log(check);
    this.state.cardHeader.indexOf("active") === -1
      ? this.setState(prevState => ({
          cardHeader: `${prevState.cardHeader} active`
        }))
      : this.setState({
          cardHeader: `item-name`
        });
  };
  render() {
    return (
      <div className="acordeon">
        {Object.keys(this.props.items).map((item: string, index: number) => {
          return (
            <div className="item" key={item}>
              <div
                id={`item-${index}`}
                className={
                  `item-${index}` === statusBtn
                    ? `${this.state.cardHeader}`
                    : "item-name active"
                }
                onClick={this.handleStyle}
              >
                <h3>{this.props.items[`item-${index}`].item_name}</h3>
              </div>
              <div
                className={
                  `item-${index}` === statusBtn
                    ? "item-description active"
                    : "none"
                }
              >
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
