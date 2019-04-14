export interface User{
    status: string;
    data: string;
}

export interface Question{
    id: number;
    text: string;
    image: string;
    category:string;
    answeroptions: [];
}

export interface AnswerOption{
    id: number;
    text:string;
    value: string;
}

export interface Mission{
    id:number;
    title: string;
    description: string;
    company_name:string;
    status: number;
    notice:string;
    due_date:string;
    receive_instructions:string;
    games_played:number;
    users_playes:number;
}