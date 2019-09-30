import {CHANGE_INPUT} from '../actions/type';

const initialState = {
    currentInputName: '',
};

const input = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_INPUT:
            return {...state, [payload.name]: payload.value, currentInputName: payload.name};
        default:
            return state;
    }
};

export default input;