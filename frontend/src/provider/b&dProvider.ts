import axios from 'axios';
import {GameList} from "../interfaces/games.ts";
import {DrinkList} from "../interfaces/drinks.ts";
import {Event} from "../interfaces/events.ts";

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

export const getEventsBetweenDates = async (startDate: Date, endDate: Date): Promise<Event[]> => {
    try {
        const response = await apiClient.get('/schedule/between_dates/', {
            params: {
                start_date: startDate.toISOString(),
                end_date: endDate.toISOString(),
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data from the API:", error);
        throw error;
    }
};

export const userEventRegister = async (eventId: number): Promise<{msg: string}> => {
    try {
        const response = await apiClient.post(`/schedule/registrations/create/${eventId}/`);
        return response.data;
    } catch (error) {
        console.error("Error registering for event:", error);
        throw error;
    }

}

export const loginToken = async (email: string, password: string): Promise<any> => {
    try {
        const response = await apiClient.post('/auth/login/', {
            email,
            password,
        });
        const tokens = {
            access: response.data.token.access,
            refresh: response.data.token.refresh
        };
        setAuthToken(tokens); // Use the access token for authentication
        console.log(tokens)
        console.log(response.data)
        return tokens;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

export const setAuthToken = (tokens: {access: string, refresh: string} | null) => {
    if (tokens) {
        // Appliquer le token à chaque requête si connecté
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`;
    } else {
        // Supprimer le token d'authentification des futurs requêtes
        delete apiClient.defaults.headers.common['Authorization'];
        localStorage.removeItem('refresh_token');
    }
};
