export const setFavorites = (characters) => {
    return{
        type:"SET_FAVORITES",
        payload: characters,
    };
};

export const AddFavorite = (character) => {
    return{
        type:"ADD_FAVORITE",
        payload: character,
    };
};

export const RemoveFavorite = (character) => {
    return{
        type:"REMOVE_FAVORITE",
        payload: character,
    };
};