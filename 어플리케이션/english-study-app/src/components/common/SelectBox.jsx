import React from 'react';
import styled from "styled-components";

const SelectBox = (prop) => {
    return (
        <Box>
            {prop.name}
        </Box>
    );
};

const Box = styled.div`
  width: 500px;
  height: 500px;
  min-width: 100px;
  
  border: 1px solid red;
  margin: auto 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default SelectBox;