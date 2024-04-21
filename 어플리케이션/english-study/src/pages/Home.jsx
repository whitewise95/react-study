import React from 'react';
import Level from "../components/level/Level";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


function Home() {
    const navigate = useNavigate();

    const leveling = useSelector((state) => {
        return state.leveling;
    });

    //레벨링이 완료되었다면
    if(leveling.level !== undefined || leveling.group !== undefined) {
        const param = leveling.level === undefined ?  leveling.group : leveling.level;
        navigate(`/${leveling.type}/${param}`)
    }

    // 초기 설정
    let selectBoxDateList = [
        {
            backgroundColor: '#E4FCFF',
            name: "단어",
            code: "subject"
        },
        {
            backgroundColor: '#FFC06E',
            name: "문장",
            code: "sentence"
        },
    ]

    // 스텝1이 선택되었다면 selectBoxDateList변경
    if (leveling.type !== undefined) {
        selectBoxDateList = []

        switch (leveling.type) {
            case "sentence": {
                selectBoxDateList = [
                    {
                        backgroundColor: '#E4FCFF',
                        name: "초급",
                        code: 1
                    },
                    {
                        backgroundColor: '#FFC06E',
                        name: "중급",
                        code: 2
                    },
                    {
                        backgroundColor: '#ffc3c3',
                        name: "고급",
                        code: 3
                    }
                ]
            }
                break;
            case "subject": {
                selectBoxDateList = [
                    {
                        backgroundColor: '#E4FCFF',
                        name: "가족",
                        code: 'group1'
                    },
                    {
                        backgroundColor: '#FFC06E',
                        name: "계절",
                        code: 'group1'
                    }
                ]
            }
                break;
        }
    }


    return <Level selectBoxDateList={selectBoxDateList}></Level>
}


export default Home;