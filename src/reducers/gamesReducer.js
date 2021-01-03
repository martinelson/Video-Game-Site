const initState = {
    popular: [], 
    newGames: [],
    upcoming: [],
    searched: [],
    hades: [],
    animalCrossing: [],
    goose: [],
    ori: []
};

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, 
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming
            };
        case "FETCH_SEARCHED":
            return{
                ...state,
                searched: action.payload.searched
            };
        case "CLEAR_SEARCH":
            return{
                ...state,
                searched: []
            };
        case "FETCH_PLAYING":
            return{
                ...state,
                hades: action.payload.hades,
                animalCrossing: action.payload.animalCrossing,
                goose: action.payload.goose,
                ori: action.payload.ori

            }
        default:
            return {...state}
    }
}

export default gamesReducer;