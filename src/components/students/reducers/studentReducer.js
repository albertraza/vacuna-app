import axios from "axios";
import { apiUrls } from '../../../shared/apiUrls';
export const initialState = {
    value: {},
    isLoading: true,
    isSaving: false
};

const types = {
    startLoading: '[STUDENT] START_LOADING',
    stopLoading: '[STUDENT] STOP_LOADING',
    startSaving: '[STUDENT] START_SAVING',
    stopSaving: '[STUDENT] STOP_SAVING',
    setValue: '[STUDENT] SET_VALUE'
};

const actions = {
    startLoading: () => ( { type: types.startLoading } ),
    stopLoading: () => ( { type: types.stopLoading } ),
    startSaving: () => ( { type: types.startSaving } ),
    stopSaving: () => ( { type: types.stopSaving } ),
    setValue: value => ( { type: types.setValue, payload: value } )
};

export const {
    startLoading,
    stopLoading,
    startSaving,
    stopSaving,
    setValue
} = actions;

export function saveStudent () {
    return async ( dispatch, getState ) => {
        const { value } = getState().student;

        dispatch( startSaving() );

        const { data } = await axios.post( apiUrls.students, { ...value } );

        dispatch( stopSaving() );
    }
}

export function studentReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case types.startLoading:
            return {
                ...state,
                isLoadingData: true
            };
        case types.stopLoading:
            return {
                ...state,
                isLoadingData: false
            };
        case types.startSaving:
            return {
                ...state,
                isSaving: true
            };
        case types.stopSaving:
            return {
                ...state,
                isSaving: false
            };
        case types.setValue:
            return {
                ...state,
                value: action.payload
            };
        default:
            return state;
    }
}
