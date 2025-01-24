import { atom } from "recoil";
import whiteftshirt from "../assets/Clothes/Men tshirt/WHITE1.png";
import whitebtshirt from "../assets/Clothes/Men tshirt/WHITE2.png";

export const selectedImageState = atom({
  key: "selectedImageState",
  default: [whiteftshirt, whitebtshirt],
});
