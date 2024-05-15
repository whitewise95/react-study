const PLUS_N = 'ounter/PLUS_N';
const MINUNS_N = 'counter/MINUNS_N';


// 초기 상태값 (state)
const initialState = {
    number: 0
}

export const plusN = (payload) => {
    if (payload === 0){
        payload = payload + 1;
    } 
    return {
        type: PLUS_N,
        payload
    }
}

export const minunsN = (payload) => {
    if (payload === 0){
        payload = payload - 1;
    } 
    return {
        type: MINUNS_N,
        payload
    }
}


//리듀서 : state에 변화를 일으키는 함수
// (1) : state를 action의 type에 따라 변경하는 함수
//input : state와 action
const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_N:
            return {
                number: state.number + action.payload
            }
        case MINUNS_N:
            return {
                number: state.number + action.payload
            }
        default:
            return state;
    }
}


export default counter;

