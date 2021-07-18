import { combineReducers } from "redux";
import searchReducer from "./search";
import charactersReducer from "./characters";
import favoritesReducer from "./favorites";

const rootReducer=combineReducers({
    search:searchReducer,
    characters: charactersReducer,
    favorites: favoritesReducer,
});

export default rootReducer;