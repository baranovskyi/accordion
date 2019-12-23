import { AppState } from "../state/model/types";
const mapState = (state: AppState) => {
  return {
    items: state.items
  };
};
export { mapState };
