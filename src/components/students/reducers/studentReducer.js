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

        const { data } = await axios.post( apiUrls.students, { ...value }, {
            headers: {
                authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQzNTE5ODAsImV4cCI6MTY0NDM1NTU4MCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDI2MTQ2NSwiaWRwIjoibG9jYWwiLCJqdGkiOiIxRkFFOEZEREJCOTRFOTZERjBDQkM5QUUzQkE2REQwOSIsInNpZCI6IkM5MzYzNzQ2MDgyN0Q3REZGRjVBNzJGRDFEMjhDNjhFIiwiaWF0IjoxNjQ0MzUxOTgwLCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.BTIy2TpfVqJbbWVT-2QU3wtCc_yd1CSTL_MRKhxPZbDjEGZAso1MaqcOYnKnJAAEjis6y8FpfiH9vPPyk-RvuhNdPcjDpF2_H5fSSaltEIt_yO_ZuTpsigW3lm_IURwmor1X1DEj-PdghcLntX-TL22gkmgxD-F2uTmz7wZRkLY386H-HLJT83Ni3ma8e03iSUuJRxd143ac2jyAtFdWje1pUbz_0wiEPcKCZjSEQzXP4N9_Zyd4EmaYiO5LSo69WedOqAvZKypXYW87vboNV2T47ouw-gtxVrmcCUkkBa2VAnW3Ltq9XhJE_w0t-GpiU6usU5z1x56r9F98Z2BBYQ'
            }
        } );

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
