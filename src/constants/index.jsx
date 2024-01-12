import { index as indexFr}  from "./indexFr.js"
import { index as indexEn} from "./indexEn.js"
import { useState } from "react";

export const currentlanguage = () => {

  const [local] = useState(localStorage.getItem("language"));

  if (localStorage.getItem("language") == null) {
    localStorage.setItem("language", "fr");
  }

  return local == "fr" ? indexFr : indexEn;
}
