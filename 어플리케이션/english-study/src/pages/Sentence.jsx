import React from 'react';
import {useParams} from "react-router-dom";

const Sentence = () => {
    const param = useParams();

    return (
        <div>
            sentence : {param.level}
        </div>
    );
};

export default Sentence;