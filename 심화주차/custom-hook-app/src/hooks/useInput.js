import { useState } from "react";

const useInput = () => {

    // state
    const [value, serValue] = useState("");


    // handler
    const handler = (e) => {
        serValue(e.target.value);

        return [value, serValue];
    }
};  

export default useInput;