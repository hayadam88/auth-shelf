const itemReducer = (state = [{description: ''}], action) => {
    if(action.type === 'SET_ITEM_LIST'){
        console.log(action);
        return action.payload;
    } else {
        console.log(state);
        return state;
    }
}

export default itemReducer;