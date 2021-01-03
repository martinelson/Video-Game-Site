const baseUrl = 'https://api.rawg.io/api/'

//Getting current date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else{
        return month;
    }
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else{
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;


//PopularGames
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//game info urls
export const popularGamesURL = () => `${baseUrl}${popular_games}`;
export const upcomingGamesURL = () => `${baseUrl}${upcoming_games}`;
export const newGamesURL = () => `${baseUrl}${new_games}`;
export const gameDetailURL = (game_id) => `${baseUrl}games/${game_id}`;
export const gameScreenshotURL = (game_id) => `${baseUrl}games/${game_id}/screenshots`;
//search game url
export const searchGameURL = (game_name) => `${baseUrl}games?search=${game_name}&page_size=9`;
//playing urls
export const hadesURL = () => `${baseUrl}games?search=Hades&search_exact=true&page_size=1`;
export const animalCrossingURL = () => `${baseUrl}games?search=Animal-Crossing-New-Horizons&search_exact=true&page_size=1`;
export const untitledGooseURL = () => `${baseUrl}games?search=Untitled-Goose-Game&search_exact=true&page_size=1`;
export const oriURL = () => `${baseUrl}games?search=Ori-and-the-Will-of-the-Wisps&search_exact=true&page_size=1`;