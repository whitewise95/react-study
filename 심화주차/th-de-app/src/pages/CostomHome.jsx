import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CostomHome() {
    const navigate = useNavigate();

    let timerId = null;


    useEffect(() => {

        return () => {
            //언마운트 시
            if(timerId){
                clearTimeout(timerId);
            }
        }
    })

    const thottle = (delay) => {
        if(timerId){
            //timerId 있으면 함수 바로 종료
            return
        }

        console.log(`API 요청 실행 ${delay} ms 동안 추가요청을 받지 않습니다.`);
        timerId = setTimeout(() => {
            console.log(`${delay} ms 지남 추가요청 받습니다.`);
            timerId = null;
        }, delay)
    };

    //반복적인 이벤트 이후, delay가 지나면 funtion
    const debounce = (delay) => {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            console.log(`마지막 요청으로부터 ${delay} ms 지났으므로 API 요청 실패`);
            timerId = null;
        }, delay)
    };


    return (

        <div style={{ paddingRight: 20, paddingLeft: 20, }}>

            <h1>button</h1>
            <button onClick={() => thottle(2000)}>
                쓰로틀링 버튼
            </button>
            <button onClick={() => debounce(2000)}>
                디바운싱 버튼
            </button>
            <div>
            <button onClick={() => {
                navigate("/company");
            }}>
                페이지 이동
            </button>
            </div>
        </div>
    )
};



export default CostomHome