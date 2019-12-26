import { ADD_ITEM } from "../actions/actions-types";
import { AddItem, AppState } from "../model/types";
const initialState = {
  items: {
    "item-0": {
      item_name: "messi",
      item_description:
        "Lionel Messi is one of the most famous footballer in the world"
    }
  }
};
function setItemId(state: AppState) {
  return `item-${Object.keys(state.items).length}`;
}
export default function reducer(
  state: AppState = initialState,
  action: AddItem
): AppState {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [setItemId(state)]: {
            item_name: action.data.item_name,
            item_description: action.data.item_description
          }
        }
      };
    default:
      return state;
  }
}
