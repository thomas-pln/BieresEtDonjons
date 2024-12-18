
export interface Game {
    id: number;
    name: string;
    description: string;
    photo: string;
    url_editor: string;
}

export interface GameList {
    count: number,
    next: string | null
    previous: string | null,
    results: Game[];
}
