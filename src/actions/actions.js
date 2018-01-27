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