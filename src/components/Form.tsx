import React from "react";
import { Field, reduxForm } from "redux-form";
import "./styles/form.css";
let Form: any = (props: any) => {
  const { handleSubmit, reset } = props;
  const submit = (values: string) => console.log(values);
  return (
    <div className="form">
      <input
        className="style-propertyes"
        type="text"
        name=""
        id=""
        placeholder="Enter item's name"
      />
      <textarea
        className="style-propertyes"
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder="Enter the summary of item"
      ></textarea>
      <button>add item</button>
    </div>
  );
};
Form = reduxForm({
  form: "post" // имя формы в state (state.form.post)
})(Form);
export default Form;
