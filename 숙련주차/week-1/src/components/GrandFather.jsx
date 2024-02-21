import React from 'react'
import Father from './Father'
import { FamilyContext } from "../context/FamilyContext"

// GF -> CHild한테 정보를 알려줘서 Child가 그 내용을 출력하도록
function GrandFather() {
    const houseName = '스파르타';
    const pocketMoney = 10000;

    return (
        <FamilyContext.Provider value={{
            houseName,
            pocketMoney
        }}>
            <Father></Father>
        </FamilyContext.Provider>

    )
}

export default GrandFather