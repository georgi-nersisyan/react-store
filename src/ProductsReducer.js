export function productsReducer(state, action) {
    if (action.type === "ADD") {
        return [...state, action.payload]
    } else if (action.type === "DELETE") {
        return state.filter((prod) => prod.id != action.payload);
    }

    return state;
}