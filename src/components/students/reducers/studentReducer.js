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
    setValue: '[STUDENT] SET_VALUE',
    clearState: '[STUDENT] CLEAR_STATE'
};

const actions = {
    startLoading: () => ( { type: types.startLoading } ),
    stopLoading: () => ( { type: types.stopLoading } ),
    startSaving: () => ( { type: types.startSaving } ),
    stopSaving: () => ( { type: types.stopSaving } ),
    setValue: value => ( { type: types.setValue, payload: value } ),
    clearState: () => ( { type: types.clearState } )
};

export const {
    startLoading,
    stopLoading,
    startSaving,
    stopSaving,
    setValue,
    clearState
} = actions;

export function saveStudent () {
    return async ( dispatch, getState ) => {
        const { value } = getState().student;
        dispatch( startSaving() );

        // evaluates to true if the id exists.
        const isEdit = !!value.id;

        const action = isEdit ? axios.put( `${ apiUrls.students }/${ value.id }`, { ...value } ) :
            axios.post( apiUrls.students, { ...value } );

        await action;

        dispatch( stopSaving() );
    }
}

export function getStudent ( id ) {
    return async ( dispatch ) => {
        dispatch( startLoading() );
        const { data } = await axios.get( `${ apiUrls.students }/${ id }` );
        dispatch( setValue( data ) );
        dispatch( stopLoading() );
    }
}

export function studentReducer ( state = initialState, action ) {
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
        case types.clearState:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
