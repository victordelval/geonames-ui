/**
 * Defines the initial state of the application as well as the
 * dispatchers (reducers) to modify the status of the application
 * stored in the store.
 *
 * In this project we want to store mainly the information that
 * we keep in the state of the search container.
 */

// In this project we want to store mainly the information that
// we keep in the state of the search container.
const initialState = {
    loading: false,
    results: [],
    search: '',
    queried: false
}

// the reducer is a function that receives different parameters
const reducer = (state = initialState, action) => {
    // the state is inmutable, so we must return an updated copy
    switch(action.type) {
        case 'SEARCH_START': {
            return Object.assign({}, state, { loading: true, search: action.search });
        }

        case 'SEARCH': {
            let results = [];

            if (!action.error) {
                results = action.payload
            }

            return Object.assign({}, state, {
                loading: false,
                results: results,
                queried: true
            })
        }

        // the reducer always returns a state, even by default
        default: {
            return state;
        }
    }
}

export default reducer;