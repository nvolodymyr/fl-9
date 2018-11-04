const createStore = (reducer) => {
    let state;
    const listeners = [];

    const getState = () => {
        return state;
    };
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((cb) => {
            cb(state);
        });
    };
    const subscribe = (cb) => {
        listeners.push(cb);
    };
    dispatch();
    return {
        dispatch,
        getState,
        subscribe
    };
};
export {
    createStore
};