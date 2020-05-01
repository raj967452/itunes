import {FETCH_ITUNESDATA_PENDING, FETCH_ITUNESDATA, FETCH_ITUNESDATA_ERROR} from '../constants';


export const fetchItunesDataPending = () => ({
    type: FETCH_ITUNESDATA_PENDING
})

export const fetchItunesDataSuccess = (data) => ({
    type: FETCH_ITUNESDATA,
    data
})

export const fetchItunesDataError = (error) => ({
    type: FETCH_ITUNESDATA_ERROR,
    error
})