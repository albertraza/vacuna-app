export const formInitialState = {
    isLoadingData: true,
    isSaving: false
};

const actions = {
    startLoading: () => ( { type: 'startLoading' } ),
    stopLoading: () => ( { type: 'stopLoading' } ),
    startSaving: () => ( { type: 'startSaving' } ),
    stopSaving: () => ( { type: 'stopSaving' } ),
};

export const { startLoading, stopLoading, startSaving, stopSaving } = actions;

export function formReducer ( state, action ) {
    switch ( action.type ) {
        case 'startLoading':
            return {
                ...state,
                isLoadingData: true
            };
        case 'stopLoading':
            return {
                ...state,
                isLoadingData: false
            };
        case 'startSaving':
            return {
                ...state,
                isSaving: true
            };
        case 'stopSaving':
            return {
                ...state,
                isSaving: false
            };
        default:
            return state;
    }
}
