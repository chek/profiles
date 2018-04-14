import actions from './stateActions'

const initialState = {
    currentProfile: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.state.CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: action.currentProfile
            };

        default:
            return state
    }
}