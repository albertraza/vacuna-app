import axios from "axios";
import { apiUrls } from "../../../shared/apiUrls";

export const initialState = {
    data: [],
    isLoading: true
};

const types = {
    startLoading: '[STUDENTS] START_LOADING',
    stopLoading: '[STUDENTS] STOP_LOADING',
    setData: '[STUDENTS] SET_DATA'
};

const actions = {
    startLoading: () => ( { type: types.startLoading } ),
    stopLoading: () => ( { type: types.stopLoading } ),
    setData: data => ( { type: types.setData, payload: data } )
};

export const {
    startLoading,
    stopLoading,
    setData
} = actions;

export function getStudents () {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        const { data } = await axios.get( apiUrls.students, {
            headers: {
                authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjI1NTc4RjhEMTAwNTRGMTE1RkRDMUI2QzY4QjZFMzNDRUZGNDg0NzkiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJKVmVQalJBRlR4RmYzQnRzYUxialBPXzBoSGsifQ.eyJuYmYiOjE2NDQyNjkwNDMsImV4cCI6MTY0NDI3MjY0MywiaXNzIjoiaHR0cHM6Ly92YWN1bmFhcHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwiY2xpZW50X2lkIjoiVmFjdW5hQVBQLlByZXNlbnRhdGlvbiIsInN1YiI6IjA3YTA3MTAxLWUwODMtNDRiNy04Njk1LTkyNmI4NGE5OWIzMiIsImF1dGhfdGltZSI6MTY0NDI2MTQ2NSwiaWRwIjoibG9jYWwiLCJqdGkiOiIzRUIwNzUzNUQ0QzVCNkZFQThEQzVENEJBOEZCRjQ5RCIsInNpZCI6IkM5MzYzNzQ2MDgyN0Q3REZGRjVBNzJGRDFEMjhDNjhFIiwiaWF0IjoxNjQ0MjY5MDQzLCJzY29wZSI6WyJWYWN1bmFBUFAuUHJlc2VudGF0aW9uQVBJIiwib3BlbmlkIiwicHJvZmlsZSJdLCJhbXIiOlsicHdkIl19.WfKst96dz0Fj60TtDv9JnZbbG7-Bpvig8GP6NrPk8ikKrqMu1WhN1Eq0b82YH11Y1F41_853k3IjTDJVt0hgFKJ5uv1ofSGgOAVyt-36UJduQb-__LSlQNV9KcDWqR_2aKs6eCMJM-PiRA9DSwoRld38FmrM1NyZJrUciND1mmHGouHg7kjM0oSEyHNZcskp28eEnPldOfX4ImVF4tiOFq0y-SibvLnI3sr5XlNFI3OswTtvRde4pxK4UB9RQ5rN3noDQ1A5EdkkuZvk5O5rs4eOBawAuoyy7IR9E99G_LthuxvzHWlfX1tDp1AMStf1M-VKApBNJmpC6RRC6KbiPw'
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
        default:
            return state;
    }
}
