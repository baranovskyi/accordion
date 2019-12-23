import { ADD_ITEM } from "../actions/actions-types";
import { AddItem, AppState } from "../model/types";
const initialState = {
  items: {
    "item-0": {
      item_name: "messi",
      item_description:
        "Lionel Messi is one of the most famous footballer in the world"
    },
    "item-1": {
      item_name: "baranovskyi",
      item_description:
        "Lionel Messi is one of the most famous footballer in the world"
    }
  }
};
export default function reducer(
  state: AppState = initialState,
  action: AddItem
): AppState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items
        }
      };
    default:
      return state;
  }
}
