const charactersReducer = (state=[], action) => {
    switch(action.type){
        case 'NEW_CHARACTERS':
            return action.payload;
        default:
            return state;
    }
};

export default charactersReducer;