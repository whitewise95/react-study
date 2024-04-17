import React from 'react';
import SelectBox from "../components/common/SelectBox";
import styled from "styled-components";

function Home() {
    return (
        <Div>
            <SelectBox name = {"초급"}/>
            <SelectBox name = {"중급"}/>
            <SelectBox name = {"고급"}/>
        </Div>
    )
}


const Div = styled.div`
  margin: 200px auto auto 300px;
  display: flex;
  
`;

export default Home;