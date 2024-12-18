export interface Drink {
    id: number;
    name: string;
    price: number;
    photo: string;
    is_soft: boolean;
}

export interface DrinkList {
    count: number,
    next: string | null
    previous: string | null,
    results: Drink[];
}