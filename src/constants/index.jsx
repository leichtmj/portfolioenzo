import { index as indexFr}  from "./indexFr.js"
import { index as indexEn} from "./indexEn.js"

export const currentlanguage = () =>{
  localStorage.storage == "fr" ? localStorage.setItem("language", "en") : localStorage.setItem("language", "fr")

  if (localStorage.getItem("language")==null){
    localStorage.setItem("language", "fr");
  }

  let local = localStorage.getItem("language");
  
  return local == "fr" ? indexFr : indexEn;
}

