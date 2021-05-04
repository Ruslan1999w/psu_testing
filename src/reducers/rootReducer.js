import {
    ACTION_CHANGE_ROW,
    ACTION_CHANGE_COLUMN,
    ACTION_CHANGE_NUMBER_OF_COLUMN,
    ACTION_CHANGE_BUTTON_VISIBILITY
} from '../actions';
const initialState = {
    rows: '0',
    columns: '0',
    numberOfColumn: '0',
    buttonHidden: false,
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_ROW:
            return {...state, rows: action.payload};
        case ACTION_CHANGE_COLUMN:
            return {...state, columns: action.payload};
        case ACTION_CHANGE_NUMBER_OF_COLUMN:
            return {...state, numberOfColumn: action.payload};
        case ACTION_CHANGE_BUTTON_VISIBILITY:
            return {...state, buttonHidden: action.payload}
    }
    return state;
};