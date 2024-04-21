import React from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {group, level, type} from "../../redux/modules/level";

const Box = styled.button`
  //크기
  width: 300px;
  height: 300px;
  min-width: 100px;

  //박스 생성
  border: 1px dashed;
  border-radius: 5px;
  margin: auto 20px;
  box-shadow: 0px 0px 0px 10px ${(prop) => prop.backgroundColor};

  //정렬
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  //text
  font-weight: bold;

  //배경 색과 불투명도
  background: ${(prop) => prop.backgroundColor};
  opacity: 0.5;

  cursor: pointer;

  //호버 되었을떼
  &:hover {
    opacity: 2.0;
  }
`;

const FontSize = styled.p`
  font-size: 50px;
`;

const test = (level) => {
    alert(level)
}

const SelectBox = ({name, backgroundColor, code}) => {

    const leveling = useSelector((state) => {
        return state.leveling;
    });

    const dispatch = useDispatch();

    const selectedLevel = () => {
        
        if (leveling.type !== undefined) {
            switch (leveling.type) {
                case "sentence": {
                    dispatch(level({
                        type: "sentence",
                        level: code
                    }))
                }
                    break;
                case "subject": {
                    dispatch(group({
                        type: "subject",
                        group: code
                    }))
                }
                    break;
            }
        } else {
            dispatch(type({
                type: code
            }))
        }
    }

    return (
        <Box backgroundColor={backgroundColor} onClick={() => selectedLevel()}>
            <FontSize>{name}</FontSize>
        </Box>
    );
};


export default SelectBox;