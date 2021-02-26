export interface User {
    id: number;
    name: string;
}

export interface Article {
    id: number;
    user: User;
    time: string;
    title: string;
    content: string;
}
