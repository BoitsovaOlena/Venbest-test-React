const reducer = (store = {name:'', lastname:'', age:'', sex:''}, action) => {
    switch(action.type) {
        case 'ADD_SEARCH': {
            store = {name:'', lastname:'', age:'', sex:''}
            store[action.payload.name] = action.payload.value
            return store;
        }
        default: {
            return store;
        }
    }
};

export default reducer;