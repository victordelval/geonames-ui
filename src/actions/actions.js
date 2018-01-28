/**
 * The actions are functions that we want to execute on the store
 * to modify / update the status of the application.
 * They return a plain object representing the message that the
 * reducer is responsible for solving and executing on the store.
 */

export const startSearch = search => {
    return {
        type: 'SEARCH_START',
        search
    }
}

export const successSearch = results => {
    return {
        type: 'SEARCH_SUCCESS',
        results
    }
}

export const searchLocations = value =>
    dispatch => {
        dispatch(startSearch(value));

        // here we use fetch to request the data to the serve, and a promise is returned
        fetch(`http://api.geonames.org/searchJSON?q=${ value }&maxRows=10&username=victordelval`)
        .then(res => {
            // data is a string buffer, so we transform it to json
            return res.json();
        })
        .then(json => {
            dispatch(successSearch(json.geonames))
        });
    }