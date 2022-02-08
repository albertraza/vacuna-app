import axios from "axios";
import { apiUrls } from "../../../shared/apiUrls";

export const initialState = {
    data: [],
    isLoading: true
};

const types = {
    startLoading: '[STUDENTS] START_LOADING',
    stopLoading: '[STUDENTS] STOP_LOADING',
    setData: '[STUDENTS] SET_DATA',
    clearState: '[STUDENTS] CLEAR_STATE'
};

const actions = {
    startLoading: () => ( { type: types.startLoading } ),
    stopLoading: () => ( { type: types.stopLoading } ),
    setData: data => ( { type: types.setData, payload: data } ),
    clearState: () => ( { type: types.clearState } )
};

export const {
    startLoading,
    stopLoading,
    setData,
    clearState
} = actions;

export function getStudents () {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        const { data } = await axios.get( apiUrls.students );
        dispatch( setData( data ) );
        dispatch( stopLoading() );
    }
}

export function studentsReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case types.startLoading:
            return {
                ...state,
                isLoading: true
            };
        case types.stopLoading:
            return {
                ...state,
                isLoading: false
            };
        case types.setData:
            return {
                ...state,
                data: action.payload
            };
        case types.clearState:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
