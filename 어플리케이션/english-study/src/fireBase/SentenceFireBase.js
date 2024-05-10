import { db } from "../config/fireBase";
import { doc, setDoc } from "firebase/firestore";
const test = async () => {
  try {
    await setDoc(doc(db, "test", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  } catch (e) {
    console.log(e);
  }
};

export { test };
