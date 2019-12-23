import { ADD_ITEM } from "./actions-types";
import { AddItem } from "../model/types";
export const addItem = (): AddItem => ({ type: ADD_ITEM });
