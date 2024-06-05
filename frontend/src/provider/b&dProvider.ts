import axios from 'axios';
import {GameList} from "../interfaces/games.ts";
import {DrinkList} from "../interfaces/drinks.ts";

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getGames = async (): Promise<GameList> => {
    try {
        const response = await apiClient.get('/games/');
        return response.data
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        throw error;
    }
};

export const getDrinks = async (): Promise<DrinkList> => {
    try {
        const response = await apiClient.get('/menu/');
        return response.data
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        throw error;
    }
};
