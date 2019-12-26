import { AppState } from "../state/model/types";
import { addItem } from "../state/actions/actions";
const mapState = (state: AppState) => {
  return {
    items: state.items
  };
};
const mapDispatch = {
  addItem
};
export { mapState, mapDispatch };
