import { type } from '@testing-library/user-event/dist/type';
import { INCREMENT, DECREMENT, PRODUCTID } from './types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};

export const setProductId = (id) => {

    return {

        type: PRODUCTID,
        payload: id,

    };

};