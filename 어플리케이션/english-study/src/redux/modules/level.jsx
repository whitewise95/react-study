export const LEVEL = 'level/LEVEL';
export const TYPE = 'level/TYPE';
export const GROUP = 'level/GROUP';

export const type = (payload) => {
    return {
        type: TYPE,
        payload
    }
}

export const level = (payload) => {
    return {
        type: LEVEL,
        payload
    }
}

export const group = (payload) => {
    return {
        type: GROUP,
        payload
    }
}


const initialState = {
    type: undefined,
    level: undefined,
    group: undefined,
}

const leveling = (state = initialState, action) => {
    
    switch (action.type) {
        case TYPE: {
            return {
                ...state,
                type: action.payload.type,
            }
        }
        case LEVEL: {
            return {
                ...state,
                level: action.payload.level
            }
        }
        case GROUP: {
            return {
                ...state,
                group: action.payload.group
            }
        }
        default:
            return state;
    }
}

export default leveling;