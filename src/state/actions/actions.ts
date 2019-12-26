import { ADD_ITEM } from "./actions-types";
import { AddItem } from "../model/types";
import { item_name, item_duecription } from "../../components/Form";
export const addItem = (): AddItem => ({
  type: ADD_ITEM,
  data: {
    item_name: item_name,
    item_description: item_duecription
  }
});
