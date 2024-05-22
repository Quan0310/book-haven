import { INCREMENT, DECREMENT, PRODUCTID } from '../action/types';


const INITIAL_STATE = {

    count: 0,
    productId: 0,
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case INCREMENT:

            return {

                ...state, count: state.count + 1,

            };

        case DECREMENT:

            return {
                ...state, count: state.count - 1,

            };

        case PRODUCTID:
            return {
                ...state, productId: action.payload,
            };
        default: return state;

    }

};

export default reducer;