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
        const { data } = await axios.get( apiUrls.students, {
            headers: {
                authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQzNTE5ODAsImV4cCI6MTY0NDM1NTU4MCwiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDI2MTQ2NSwiaWRwIjoibG9jYWwiLCJqdGkiOiIxRkFFOEZEREJCOTRFOTZERjBDQkM5QUUzQkE2REQwOSIsInNpZCI6IkM5MzYzNzQ2MDgyN0Q3REZGRjVBNzJGRDFEMjhDNjhFIiwiaWF0IjoxNjQ0MzUxOTgwLCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.BTIy2TpfVqJbbWVT-2QU3wtCc_yd1CSTL_MRKhxPZbDjEGZAso1MaqcOYnKnJAAEjis6y8FpfiH9vPPyk-RvuhNdPcjDpF2_H5fSSaltEIt_yO_ZuTpsigW3lm_IURwmor1X1DEj-PdghcLntX-TL22gkmgxD-F2uTmz7wZRkLY386H-HLJT83Ni3ma8e03iSUuJRxd143ac2jyAtFdWje1pUbz_0wiEPcKCZjSEQzXP4N9_Zyd4EmaYiO5LSo69WedOqAvZKypXYW87vboNV2T47ouw-gtxVrmcCUkkBa2VAnW3Ltq9XhJE_w0t-GpiU6usU5z1x56r9F98Z2BBYQ'
            }
        } );
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
