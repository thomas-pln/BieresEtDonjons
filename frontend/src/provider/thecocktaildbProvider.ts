import axios from 'axios';
import {RandomDrink} from "../interfaces/thecoktaildb.ts";

const apiClient = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getRandomCocktail = async (): Promise<RandomDrink> => {
    try {
        const response = await apiClient.get('/random.php');
        return response.data['drinks'][0];
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        throw error;
    }
};
