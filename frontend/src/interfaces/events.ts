export interface Event {
    id: number;
    title: string;
    description: string;
    start_date: string; // Assuming dates are received as strings
    end_date: string;   // Assuming dates are received as strings
}

export interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    description: string;
}