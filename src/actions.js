export const ACTION_CHANGE_ROW = 'ACTION_CHANGE_ROW';
export const ACTION_CHANGE_COLUMN = 'ACTION_CHANGE_COLUMN';
export const ACTION_CHANGE_NUMBER_OF_COLUMN = 'ACTION_CHANGE_NUMBER_OF_COLUMN';
export const ACTION_CHANGE_BUTTON_VISIBILITY = 'ACTION_CHANGE_BUTTON_VISIBILITY';

export const actionChangeRow = (value) => {
    return {
        type: ACTION_CHANGE_ROW,
        payload: value,
    }
};

export const actionChangeColumn = (value) => {
    return {
        type: ACTION_CHANGE_COLUMN,
        payload: value,
    }
};

export const actionChangeButtonVisibility = (value) => {
    return {
        type: ACTION_CHANGE_BUTTON_VISIBILITY,
        payload: value,
    }
};