const PLUS_ONE = 'ounter/PLUS_ONE';
const MINUNS_ONE = 'counter/MINUNS_ONE';


// 초기 상태값 (state)
const initialState = {
    number: 0
}

export const plusOne = () => {
    return {
        type: PLUS_ONE
    }
}

export const minunsOne = () => {
    return {
        type: MINUNS_ONE
    }
}


//리듀서 : state에 변화를 일으키는 함수
// (1) : state를 action의 type에 따라 변경하는 함수
//input : state와 action
const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1
            }
        case MINUNS_ONE:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}


export default counter;

