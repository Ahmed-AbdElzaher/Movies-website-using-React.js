export const addToFavorite = "addToFavorite";
export const removeFromFavorite = "removeFromFavorite";

export const addToFavoriteAction = (payload) => {
    return {
        type: addToFavorite,
        payload
    };
};
export const removeFromFavoriteAction = (payload) => {
    return {
        type: removeFromFavorite,
        payload
    };
};
