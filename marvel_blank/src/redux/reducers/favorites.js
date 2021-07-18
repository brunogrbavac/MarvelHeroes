const favoritesReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_FAVORITE':
            localStorage.setItem('favoritesMarvel', JSON.stringify([...state, action.payload]));
            return [...state, action.payload];
        case 'REMOVE_FAVORITE':
            localStorage.setItem('favoritesMarvel', JSON.stringify(state.filter( character => character.id !== action.payload.id)));
            console.log(state.filter( character => character.id !== action.payload.id));
            return state.filter( character => character.id !== action.payload.id);
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
};

export default favoritesReducer;