let itemList = []

let Storage = localStorage.getItem('LIST');

const list = Storage ? JSON.parse(Storage): itemList;
const reducer = (store = list, action) => {
    switch(action.type) {
        case 'ADD_INFO': {
            Storage && (store = JSON.parse(Storage))
            !Storage && (store = action.payload)
            
            return store;
                
            };
        

        default: {
            return store;
        }
    }
};

export default reducer;