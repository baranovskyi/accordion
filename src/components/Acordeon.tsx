import React from "react";
import AcordeonItem from "./AcordeonItem";
import { mapState } from "./container";
import "./styles/acordeon.css";
import { connect } from "react-redux";
import { AppState, Item, ItemType } from "../state/model/types";
class Acordeon extends React.Component<{ items: Item }> {
  constructor(props: AppState) {
    super(props);
  }

  makeCards() {
    const cards = Object.values(this.props.items).map((item, i) => {
      return <AcordeonItem item={item} key={i} />;
    });
    return cards;
  }

  render() {
    return <div className="acordeon">{this.makeCards()}</div>;
  }
}
export default connect(mapState)(Acordeon);
