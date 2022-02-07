export const initialState = {
    value: {},
    isLoading: true,
    isSaving: false
};

const types = {
    startLoading: '[STUDENT] START_LOADING',
    stopLoading: '[STUDENT] STOP_LOADING',
    startSaving: '[STUDENT] START_SAVING',
    stopSaving: '[STUDENT] STOP_SAVING'
};

const actions = {
    startLoading: () => ( { type: types.startLoading } ),
    stopLoading: () => ( { type: types.stopLoading } ),
    startSaving: () => ( { type: types.startSaving } ),
    stopSaving: () => ( { type: types.stopSaving } ),
};

export const {
    startLoading,
    stopLoading,
    startSaving,
    stopSaving
} = actions;

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
        default:
            return state;
    }
}
