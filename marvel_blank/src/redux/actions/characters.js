export const newCharacters = (fetchedCharacters) => {
    return{
        type:"NEW_CHARACTERS",
        payload: fetchedCharacters,
    };
};