import { atom } from "recoil";

export const selectedCategoryState = atom({
  key: "Category",
  default: "men",
});
