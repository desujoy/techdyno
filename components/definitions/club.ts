export interface ClubData{
    id: number;
    name: string;
    fullname:string;
    image: string;
    description: string;
    team:team[];
}

interface team{
    id:number;
    name: string;
    members: member[];
}

interface member{
    reg_no:string;
    name: string;
    email: string;
    phone: number;
}