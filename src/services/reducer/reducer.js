import axios from '../api/apiCallHelper';

import { SEARCH } from '../constants';

const initialState = {
    data: [],
    value: ''
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                data: action.payload
            };
        default:
            return state
    }
}

export const search = (item) => {
    return dispatch => {
        return axios.get(`/search${item}`)
            .then(res => {
                return dispatch({
                    type: SEARCH,
                    payload: res.data.results
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
};