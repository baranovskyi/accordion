import React from "react";
import "./styles/form.css";
import { mapState, mapDispatch } from "./container";
import { connect } from "react-redux";
let item_name: string;
let item_duecription: string;
export { item_name, item_duecription };
class Form extends React.Component<{ addItem: () => void }> {
  addItem = () => {
    this.props.addItem();
  };
  handleClick = (e: any) => {
    this.props.addItem();
  };
  inputValue = (e: any) => {
    item_name = e.target.value;
  };
  textareaValue = (e: any) => {
    item_duecription = e.target.value;
  };
  render() {
    return (
      <div className="form">
        <input
          onChange={this.inputValue}
          className="style-propertyes"
          type="text"
          name=""
          id=""
          placeholder="Enter item's name"
        />
        <textarea
          onChange={this.textareaValue}
          className="style-propertyes"
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="Enter the summary of item"
        ></textarea>
        <button onClick={this.handleClick}>add item</button>
      </div>
    );
  }
}
export default connect(mapState, mapDispatch)(Form);
