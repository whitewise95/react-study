import React, { useContext } from 'react'
import {FamilyContext} from "../context/FamilyContext"

function Child() {
    
    const data = useContext(FamilyContext);

    console.log(data);
    
    const style = {
        color: 'red',
        fontWeight: "900"
    }

    return (
        <div>나는 이 집안의 막내엥요 <br />
            할아버지가 우리 집 이름은 <span style={style}>{data.houseName}</span> 이라고 하셨어요  <br />
            게다가 용돈도 <span style={style}>{data.pocketMoney}</span> 만큼이나 주셨어요
        </div>
    )
}

export default Child