import React from 'react';
import SelectBox from "../common/SelectBox";
import styled from "styled-components";

const Level = ({selectBoxDateList}) => {
    return (
        <Div>
            {
                selectBoxDateList.map((item) => {
                    return <SelectBox key={item.name} backgroundColor={item.backgroundColor} name={item.name} code = {item.code}/>
                })
            }
        </Div>
    );
};

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Level;