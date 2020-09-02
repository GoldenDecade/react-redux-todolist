import {CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM} from './actionType';
export const changeInputValueAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});
export const addItemAction = () => ({
    type: ADD_ITEM
});
export const delItemAction = (index) => ({
    type: DEL_ITEM,
    index
});