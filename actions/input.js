import {CHANGE_INPUT} from './type';

export const changeInput = (name, value) => dispatch => {
    dispatch({
        type: CHANGE_INPUT,
        payload: {name, value},
    });
};