import actions from './stateActions'

const initialState = {
    allProfiles: [],
    currentProfile: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.state.CURRENT_PROFILE:
            return {
                ...state,
                currentProfile: action.currentProfile
            };

        case actions.state.ALL_PROFILES:
            return {
                ...state,
                allProfiles: action.allProfiles
            };

        default:
            return state
    }
}