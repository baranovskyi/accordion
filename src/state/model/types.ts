export type AddItem = {
  type: "ADD_ITEM";
  data: {
    item_name: string;
    item_description: string;
  };
};
export type AppState = {
  items: Item;
};
export type Item = {
  [key: string]: ItemType;
};
export type ItemType = {
  item_name: string;
  item_description: string;
};
