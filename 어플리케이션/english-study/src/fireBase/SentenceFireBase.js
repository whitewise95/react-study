import {db} from "../config/fireBase";
import { doc, getDoc} from 'firebase/firestore';
const test = async () => {
    try {
debugger
        const docRef = doc(db, "test", "1");
        // 참조에 대한 Snapshot 쿼리
        const docSnap = await getDoc(docRef);

        console.log("test")
    } catch (e) {
        console.log(e)
    }
}

export {test}